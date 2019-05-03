'use strict'
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const utilsManager = require('./utils')
const chaiEnzyme =  require("chai-enzyme")


before(async () => {
  chai.use(chaiAsPromised)
  chai.use(chaiEnzyme()) 
  await utilsManager.setup()
})

after(async () => {
  await utilsManager.tearDown()
})
