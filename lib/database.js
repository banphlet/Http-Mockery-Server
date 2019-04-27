'use strict'

const config = require('../config')
const mongoose = require('mongoose')
const {RateLimiterMongo} = require("rate-limiter-flexible")

function connect() {
  return mongoose.connect(config('DB_URL'))
}

function disconnect() {
  return mongoose.disconnect()
}

const rateLimiterMongo = () => {
  const mongoConn = mongoose.connection
  const opts = {
    storeClient: mongoConn,
    points: 10,
    duration: 1,
  }

  const rateLimiterMongo = new RateLimiterMongo(opts)

  return rateLimiterMongo
}

module.exports = {
  connect,
  disconnect,
  rateLimiterMongo
}
