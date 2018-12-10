const saveData = require('../sql/submit')
exports.insert_data = async function (ctx, next) {
  //console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaa',ctx.request.body)
  let {name, mail} = ctx.request.body
  let [ data ] = await saveData.save_data([name,mail])
  ctx.body = {
    code: 0,
    data
  }
  // console.log(name,mail)
}
