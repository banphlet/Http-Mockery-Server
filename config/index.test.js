'use strict'
const { expect } = require('chai')
const config = require('./index')

describe('Config Tests', () => {
  it('should throw error if env is not provided', () => {
    expect(() => config('NO_ENV')).to.throw('NO_ENV not provided')
  })

  it('should return env if available', () => {
    return expect(config('NODE_ENV')).to.equal('development')
  })
})
