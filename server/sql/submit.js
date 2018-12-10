const {pool} = require('../config/mysql')
const mysql2 = require('mysql2')

function query(...params) {
  let sql = mysql2.format(...params)
  console.log(sql)
  return pool.query(...params)
}

exports.save_data = async function(name,mail){
  let sql = 'insert into customer value(null,?)'
  console.log(sql)
  return query(sql, [name, mail])
}
