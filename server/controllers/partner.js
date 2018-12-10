
const homeData = require('../sql/home')

exports.get_partner = async function (ctx, next) {
  let {type} = ctx.query
  let [ data ] = await homeData.get_partner(type)
  ctx.body = {
    code: 0,
    data
  }
}
