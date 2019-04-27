'use strict'
const faker = require('faker')
const { defaults, sample } = require('lodash')

const createRequest = ({ overrides = {} } = {}) => {
  const request = Object.assign({}, overrides)
  return defaults(request, {
    endpoint: faker.random.uuid(),
    body: JSON.stringify({ name: faker.name.firstName() }),
    method: sample(['post', 'get']),
  })
}

module.exports = {
  createRequest,
}
