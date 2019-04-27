'use strict'

function required(str) {
  throw new Error(`${str} is required`)
}

module.exports = {
  required,
}
