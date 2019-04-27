'use strict'

const { upsert } = require("../../models/user")
const { generatJwt } = require("../../lib/jwt")

const  createUser =  async (data) => { 
    const user = await upsert({ query: { email: data.email }, update: data })
    const jwt = await generatJwt({ id: user.id })

    return { jwt }
 }



 module.exports = {
    createUser
 }