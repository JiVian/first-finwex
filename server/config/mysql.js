const mysql = require('mysql2/promise')
const bluebird = require('bluebird')

exports.pool = mysql.createPool({
  host: process.env.MYSQL_HOST || '127.0.0.1',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASS || 'root',
  database: process.env.MYSQL_DB || 'finwex_index',
  waitForConnections: true,
  connectionLimit: 500,
  queueLimit: 0,
  Promise: bluebird
})
