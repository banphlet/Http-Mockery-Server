'use strict'

if (process.env.NODE_ENV !== 'production') process.env.NODE_ENV = 'development'

if (process.env.NODE_ENV === 'development') require('dotenv').config()

module.exports = variable => {
  const env = process.env[variable]
  if (!env) {
    throw new Error(`${variable} not provided`)
  }
  return process.env[variable]
}
