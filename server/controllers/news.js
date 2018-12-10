const rp = require('request-promise')
const _ = require('lodash')
exports.getNews = async function (ctx) {
  let {page, per_page, categories} = ctx.query
  if (per_page === undefined) {
    per_page = 6
  }
  if (page === undefined) {
    page = 1
  }
  if (categories === undefined){
    categories = 1
  }
  //console.log(categories,per_page)
  try {
    let res = await rp({
      uri: 'http://47.99.126.113:8080/wp-json/wp/v2/posts',
      qs: {
        page,
        per_page,
        categories
      },
      json: true
    })
    //console.log(res)
    if (_.isArray(res)) {
      let postsa = []
      for (let data of res) {
        if (data.featured_media) {
          let media = await rp({
            uri: 'http://47.99.126.113:8080/wp-json/wp/v2/media/' + data.featured_media,
            json: true
          })
          data.featured_media = media.source_url
          postsa.push(data)
        }
      }
      ctx.body = postsa
    } else {
      ctx.body = []
    }
  } catch (e) {
    console.error(e)
    ctx.body = []
  }
}
exports.getDetail = async function (ctx) {
  let {id} = ctx.query
  try {
    let res = await rp({
      uri: 'http://47.99.126.113:8080/wp-json/wp/v2/posts/'+id,
      json: true
    })
    //console.log(res)
    // console.log(res.length){
    ctx.body = res
  } catch (e) {
    console.error(e)
    ctx.body = []
  }
}
