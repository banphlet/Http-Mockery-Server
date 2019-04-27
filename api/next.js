'use strict'

const config = require('../config')
const next = require('next')

const app = next({ dev: config('NODE_ENV') !== 'production' })
const handle = app.getRequestHandler()

module.exports = {
  app,
  handle,
}
