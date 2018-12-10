
const homeData = require('../sql/home')
const fs = require("fs");

exports.get_personnel = async function (ctx, next) {
  let {type} = ctx.query
  let [ data ] = await homeData.get_personnel(type)
  ctx.body = {
    code: 0,
    data
  }
}

//模板字符串
//解构赋值
//koa
//node模块  fs
//get