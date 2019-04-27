'use strict'
const jwt = require("jsonwebtoken")
const config = require("../config")
const utils = require("util")
const promisifyVerifyJwt = utils.promisify(jwt.verify)

module.exports = {
    generatJwt: function generateJWt(data) {
        return jwt.sign(data,  config("JWT_SECRET"), {
            expiresIn: "1hr",
            
        })
    },
    verify: function verify(data){
        return promisifyVerifyJwt(data, config("JWT_SECRET"))
    }
}