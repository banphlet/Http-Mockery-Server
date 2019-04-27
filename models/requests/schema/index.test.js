'use strict'
const { expect } = require('chai')
const schema = require('./index')

describe('Schema Test', () => {
  const path = schema.paths

  describe('endpoint', () => {
    const endpoint = path.endpoint
    it('should be required', () => {
      return expect(endpoint.isRequired).to.be.equal(true)
    })

    it('should be a string', () => {
      return expect(endpoint.instance).to.be.a('String')
    })
  })

  describe('headers', () => {
    const headers = path.headers
    it('should be required', () => {
      return expect(headers.isRequired).to.be.equal(true)
    })

    it('should be a string', () => {
      return expect(headers.instance).to.be.a('String')
    })
  })

  describe('body', () => {
    const body = path.body
    it('should be required', () => {
      return expect(body.isRequired).to.be.equal(true)
    })

    it('should be a string', () => {
      return expect(body.instance).to.be.a('String')
    })
  })

  describe('method', () => {
    const method = path.method
    it('should be required', () => {
      return expect(method.isRequired).to.be.equal(true)
    })

    it('should be a string', () => {
      return expect(method.instance).to.be.a('String')
    })
  })

  describe('status', () => {
    const status = path.status
    it('should be required', () => {
      return expect(status.isRequired).to.be.equal(true)
    })

    it('should be a number', () => {
      return expect(status.instance).to.be.a('number')
    })
  })
})
