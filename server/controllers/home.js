const homeData = require('../sql/home')
const Promise = require('bluebird')

exports.banner_index = async function (ctx, next) {
  let synthesisTableName = 'f20_index'
  let hedgeTableName = 'composite_index'
  let [
    synthesis,
    hedge,
  ] = await Promise.all([
    getIndexDetail(synthesisTableName),
    getIndexDetail(hedgeTableName),
  ])

  ctx.body = {
    synthesis,
    hedge,
  }
}
exports.index = async function (ctx, next) {
  let {type} = ctx.query
  let {indexType} = ctx.query
  let start = 0
  let end = Date.now()
  if (type === undefined) {
    type = '7d'    // 默认12小时
  }
  if (type === '1d') {
    start = end - (24 * 3600 * 1000)
  }
  if (type === '7d') {
    start = end - (24 * 3600 * 1000 * 7)
  }
  if (type === '1m') {
    start = end - (24 * 3600 * 1000 * 30)
  }
  if(type === 'All') {
    start = 1525017600 * 1000
  }
  let indexTypeConfig
  let tableName = ''
  if (indexType === 'finwex20') {
    indexTypeConfig = {
      color: '#F12C8D',
      title: 'FINWEX20 综合指数'
    }
    tableName = 'f20_index'
  } else if (indexType === 'finwex11') {
    indexTypeConfig = {
      color: '#9E42ED',
      title: 'FINWEX11 避险指数'
    }
    tableName = 'composite_index'
  } else if (indexType === 'finwex20bias') {
    indexTypeConfig = {
      color: '#1E7DE2',
      title: 'FINWEX20 BIAS 偏离指数'
    }
    tableName = 'surprise_index'
  } else {
    ctx.body = {
      code: -1,
      msg: '参数不合法'
    }
    return
  }

  let [[rows], indexDetail] = await Promise.all([
    homeData.get_index_by_time(tableName, start, end),
    getIndexDetail(tableName)
  ])
  if (indexType === 'finwex20bias') {
    rows = rows.map((r) => {
      r.time = r.time + 150 * 60 * 1000
      return r
    })
  }
  ctx.body = {
    data: rows,
    code: 0,
    indexType: indexType,
    ...indexTypeConfig,
    indexDetail
  }
}

async function getIndexDetail(tableName) {
  let utcC = new Date(new Date().setHours(0, 0, 0, 0)).getTime()
  let utcC5 = utcC + 30 * 60 * 1000
  let [[row3], [rows2]] = await Promise.all([
    homeData.get_index_by_time(tableName, utcC, utcC5),
    homeData.get_now_index(tableName)
  ])
  if (row3.length === 0 || rows2.length === 0) {
    return {
      rate: 0,
      rise: 0,
      nowIndex: 0
    }
  }
  let zIndex = 0
  let nowIndex = 0

  if (row3.length > 0) {
    zIndex = parseFloat(row3[0].value)
  }

  if (rows2.length > 0) {
    nowIndex = parseFloat(rows2[0].value)
  }
  let rise = false
  let rate = 0
  if (zIndex > nowIndex) {
    rate = (zIndex - nowIndex) / zIndex
  } else {
    rate = (nowIndex - zIndex) / zIndex
    rise = true
  }
  return {
    rate: (rate * 100).toFixed(2),
    rise,
    nowIndex: nowIndex.toFixed(2)
  }
}

exports.about_index = async function (ctx, next) {
  let {indexType} = ctx.query
  let [row] = await homeData.get_index_detail_by_symbol(indexType)
  if (row.length === 0) {
    ctx.body = {
      code: -1,
      msg: 'no index detail'
    }
    return
  }
  ctx.body = row[0]
}

exports.get_white_paper = async function (ctx, next) {
  let [data] = await homeData.get_white_paper()
  ctx.body = {
    code: 0,
    data
  }
}

exports.ticket_number = async function (ctx) {
  let {ticket_number} = ctx.query
  if (ticket_number === undefined) {
    return ctx.body = {
      success: false
    }
  }
  await homeData.ticket_number({
    code: ticket_number,
    created_time: Math.round(Date.now() / 1000)
  })
  ctx.body = {
    success: true
  }
}

// 接口：calendar日历
exports.get_calendar = async function (ctx, next) {
  let {type} = ctx.query
  let [ data ] = await homeData.get_calendar(type)
  ctx.body = {
    code: 0,
    data
  }
}
/**
 * 接口: /f20_hour_index
 * 可选参数startTime, endTime （格式：时间戳），默认获取近24小时数据f20指数数据
 * 返回一段时间内以小时为单位的点的数据
 */
exports.f20_hour_index = async function (ctx) {
  let {startTime, endTime} = ctx.query
  let synthesisTableName = 'f20_index'
  if (startTime === undefined || endTime === undefined) {
    endTime = Date.parse(new Date())
    startTime = Date.parse(new Date()) - 24 * 60 * 60 * 1000
    let result = await homeData.get_f20_hour_index(startTime, endTime)
    let index = await getIndexDetail(synthesisTableName)
    ctx.body = {
      success: true,
      data: result[0],
      index:index
    }
  }else{
    let result = await homeData.get_f20_hour_index(startTime, endTime)
    ctx.body = {
      success: true,
      data: result[0]
    }
  }
}

/**
 * 接口: /composite_hour_index
 * 可选参数startTime, endTime （格式：时间戳），默认获取近24小时数据综合指数数据
 * 返回一段时间内以小时为单位的点的数据
 */
exports.composite_hour_index = async function (ctx) {
  let {startTime, endTime} = ctx.query
  let hedgeTableName = 'composite_index'
  if (startTime === undefined || endTime === undefined) {
    endTime = Date.parse(new Date())
    startTime = Date.parse(new Date()) - 24 * 60 * 60 * 1000
    //console.log(endTime,startTime)
    let result = await homeData.get_composite_hour_index(startTime, endTime)
    let index = await getIndexDetail(hedgeTableName)
    ctx.body = {
      success: true,
      data: result[0],
      index:index
    }
  }else{
    let result = await homeData.get_composite_hour_index(startTime, endTime)
    ctx.body = {
      success: true,
      data: result[0]
    }
  }
}


/**
 * 接口: /composite_chart
 * 用于前端圆环图调用接口
 */
exports.composite_chart = async function (ctx) {
  let _obj = {
    legend:['ethereum', 'XRP', 'Bitcoin-cash', 'EOS', 'Stellar', 'Litecoin', 'Tether', 'Cardano', 'Monero', 'Dash', 'ananother'],
    data:[
      {name:'ethereum',value:28345064605},
      {name:'XRP',value:13106477064},
      {name:'Bitcoin-cash',value:9306186052},
      {name:'EOS',value:5632222781},
      {name:'Stellar',value:4092379418},
      {name:'Litecoin',value:3463128709},
      {name:'Tether',value:2782446371},
      {name:'Cardano',value:2591511815},
      {name:'Monero',value:1772279599},
      {name:'Dash',value:1538285929},
      {name:'another',value:32246864462}
]

}
    ctx.body = {
      success: true,
      data: _obj
  }
}

/**
 * 接口: /composite_data
 * 用于前端综合指数详细数值接口
 */
exports.composite_data = async function (ctx) {
  let _obj = {
    'components_number':1564,
    'time':"2018.4.30",
    'components_total':15055728.082189,
    'components_max':4069111.516658,
    'components_min':0.041057,
    'components_avg':1.381934,
    'components_media':234.699989
  }
    ctx.body = {
      success: true,
      data: _obj
  }
}

/**
 * 接口: /f20_chart
 * 用于前端圆环图调用接口
 */
exports.f20_chart = async function (ctx) {
  let _obj = {
    legend:['bitcoin','ethereum','ripple','bitcoin-cash','eos','stellar','litecoin','cardano','iota','monero','tron','dash','ethereum-classic','neo','binance-coin','vechain','nem','tezos','zcash','omisego'],
    data:[
      {name:'bitcoin',value:120105697776},
      {name:'ethereum',value:28345064605},
      {name:'ripple',value:13106477064},
      {name:'bitcoin-cash',value:9306186052},
      {name:'eos',value:5632222781},
      {name:'stellar',value:4092379418},
      {name:'litecoin',value:3463128709},
      {name:'cardano',value:2591511815},
      {name:'iota',value:1927506967},
      {name:'monero',value:1772279599},
      {name:'tron',value:1622393828},
      {name:'dash',value:1538285929},
      {name:'ethereum-classic',value:1326775818},
      {name:'neo',value:1261279500},
      {name:'binance-coin',value:1023836940},
      {name:'vechain',value:942142671},
      {name:'nem',value:924506999},
      {name:'tezos',value:815074121},
      {name:'zcash',value:677743142},
      {name:'omisego',value:584378732}
    ]
  }
  ctx.body = {
    success: true,
    data: _obj
  }
}

/**
 * 接口: /f20_data
 * 用于前端综合指数详细数值接口
 */
exports.f20_data = async function (ctx) {
  let _obj = {	
    'components_number':20,
    'time':"2018.4.30",
    'components_total':201058872466,
    'components_max':120105697776,
    'components_min':584378732,
    'components_avg':10052943623,
    'components_median':1622393828
  }
    ctx.body = {
      success: true,
      data: _obj
  }
}