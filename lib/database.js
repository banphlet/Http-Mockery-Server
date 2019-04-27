'use strict'

const config = require('../config')
const mongoose = require('mongoose')

function connect() {
  return mongoose.connect(config('DB_URL'))
}

function disconnect() {
  return mongoose.disconnect()
}

module.exports = {
  connect,
  disconnect,
}
