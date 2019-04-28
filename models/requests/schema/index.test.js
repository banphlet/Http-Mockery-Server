'use strict'
const { expect } = require('chai')
const schema = require('./index')

describe('Schema Test', () => {
  const path = schema.paths

  describe('shop_id', () => {
    const user_id = path.user_id
    it('should be required', () => {
      return expect(user_id.isRequired).to.be.equal(true)
    })

    it('should be an Object id', () => {
      return expect(user_id.instance).to.equal('ObjectID')
    })

  });

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
    it('should have default value of 200', () => {
      return expect(status.defaultValue).to.be.equal(200)
    })

    it('should be a number', () => {
      return expect(status.instance).to.be.equal('Number')
    })
  })
})
