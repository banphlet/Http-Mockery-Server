'use strict'
const { expect } = require('chai')
const { create, get } = require('./index')
const { createRequest } = require('../../tests/features/request')

describe('Requests Model', () => {
  describe('create', () => {
    it('should throw if data not provided', () => {
      return expect(create()).rejectedWith('data is required')
    })

    it('should be a promise', () => {
      return expect(create(createRequest())).to.be.a('promise')
    })

    it('should save data in db successfully', async () => {
      const data = await create(createRequest())
      return expect(
        get({ query: { endpoint: data.endpoint } })
      ).to.eventually.eql(data)
    })
  })

  describe('get()', () => {
    it('should throw error if query is not passed', () => {
      return expect(() => get({})).to.throw('query is required')
    })
    it('should get data from db successfully', async () => {
      const data = await create(createRequest())
      return expect(
        get({ query: { endpoint: data.endpoint } })
      ).to.eventually.eql(data)
    })
  })
})
