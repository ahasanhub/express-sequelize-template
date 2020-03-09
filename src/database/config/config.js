'use strict'
require('dotenv').config();

const development = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: 'mysql'
}
const test = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.TEST_DB_NAME,
  host: process.env.DB_HOST,
  dialect: 'mysql'
}

const production = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: 'mysql'
}

module.exports = {
  development,
  test,
  production
}