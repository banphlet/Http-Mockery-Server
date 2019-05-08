'use strict'

function required(str) {
  throw new Error(`${str} is required`)
}

function parseJson(str){
  try {
    return JSON.parse(str)
  } catch (error) {
    return str
  }
}

module.exports = {
  required,
  parseJson
}
