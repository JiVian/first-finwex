const homeData = require('../sql/home')

exports.get_photo = async function (ctx, next) {
  let {catetory, type} = ctx.query
  let [ data ] = await homeData.get_photo(catetory, type)
  ctx.body = {
    code: 0,
    data
  }
}