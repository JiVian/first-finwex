const {pool} = require('../config/mysql')
const mysql2 = require('mysql2')

function query(...params) {
  let sql = mysql2.format(...params)
  console.log(sql)
  return pool.query(...params)
}

exports.get_index = async function () {
  let sql = 'select * from fbi_cmc_index order by id desc limit 100'
  return await query(sql)
}

exports.get_index_by_time = function (tableName, start, end) {
  let sql = 'select * from ?? where `time`>? and `time`<?'
  return query(sql, [ tableName, start, end ])
}
exports.get_now_index = function (tableName) {
  let sql = 'select * from ?? order by id desc limit 1'
  return query(sql, [tableName])
}
exports.get_index_detail_by_symbol = function (indexSymbol) {
  let sql = 'select * from index_detail where index_symbol=?'
  return query(sql, [indexSymbol])
}
exports.get_personnel = async function (type) {
  let sql = 'select * from personnel where type=? and status=0 order by sort'
  return query(sql, [type])
}
exports.get_partner = async function (type) {
  let sql = 'select * from partner where type=? order by sort desc'
  return query(sql, [type])
}
exports.get_calendar = async function (type) {
  let sql = 'select * from calendar where type=? order by sort'
  return query(sql, [type])
}
exports.get_photo = async function (catetory, type) {
  let sql = 'select * from photo where status=? and type=? order by sort desc'
  if (type === 'all'){
    sql = 'select * from photo where status=? order by sort desc'
  }
  return query(sql, [catetory, type])
}
exports.get_ratings = async function (type) {
  let sql = 'select * from ratings where type=? order by sort desc'
  return query(sql, [type])
}
exports.get_white_paper = async function () {
  let sql = 'select * from white_paper'
  return query(sql)
}
exports.ticket_number = async function (obj) {
  let sql = 'insert into ticket_number SET ?'
  return query(sql, [obj])
}

exports.get_f20_hour_index = async function (startTime, endTime) {
  let sql = `SELECT avg(value) value, CONVERT_TZ((FROM_UNIXTIME(time/1000,'%Y-%m-%d %H:00:00')), @@session.time_zone,'+00:00') as timeFormat FROM f20_index where time BETWEEN ? and ? GROUP BY timeFormat `
  return query(sql, [startTime, endTime])
}

exports.get_composite_hour_index = async function (startTime, endTime) {
  let sql = `SELECT avg(value) value, CONVERT_TZ((FROM_UNIXTIME(time/1000,'%Y-%m-%d %H:00:00')), @@session.time_zone,'+00:00') as timeFormat FROM composite_index where time BETWEEN ? and ? GROUP BY timeFormat `
  return query(sql, [startTime, endTime])
}
