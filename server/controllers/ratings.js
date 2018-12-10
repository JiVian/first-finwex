const homeData = require('../sql/home')

exports.get_ratings = async function (ctx, next) {
  let {type} = ctx.query
  let [ data ] = await homeData.get_ratings(type)
  ctx.body = {
    code: 0,
    data
  }
}
