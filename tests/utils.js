'use strict'
const { connect, disconnect } = require('../lib/database')
const mongoose = require('mongoose')

module.exports = {
  setup: function setup() {
    return connect()
  },
  tearDown: async function tearDown() {
    await mongoose.connection.dropDatabase()
    return disconnect()
  },
}
