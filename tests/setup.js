'use strict'
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const utilsManager = require('./utils')

before(async () => {
  chai.use(chaiAsPromised)
  await utilsManager.setup()
})

after(async () => {
  await utilsManager.tearDown()
})
