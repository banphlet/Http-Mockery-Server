'use strict'
const { expect } = require('chai')
const { connect, disconnect } = require('./database')
const mongoose = require('mongoose')
describe('Database Test', () => {
  it('should be a promise', () => {
    return expect(connect()).to.be.a('promise')
  })

  it('should connect to database successfully', async () => {
    await connect()
    return expect(mongoose.connection.readyState).to.equal(1)
  })

  it('should disconnect from database successfullu', async () => {
    await disconnect()
    return expect(mongoose.connection.readyState).to.equal(0)
  })
})
