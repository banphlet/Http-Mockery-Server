'use strict'

const express = require('express')
const morgan = require('morgan')
const bodyParser = require("body-parser")
const { connect, rateLimiterMongo } = require('../lib/database')
const app = express()

app.use(morgan('combined'))
.use(bodyParser.json())
.use(bodyParser.urlencoded({ extended: false }))
.use((req, res, next) => {
    rateLimiterMongo()
      .consume(req.connection.remoteAddress)
      .then(() => {
        next()
      })
      .catch(() => {
        res.sendStatus(429)
      })
  })
.use( (error, req, res, next ) =>{
    return res.status(400).json(error)
})
app.use('/_next', express.static('.next'))


connect()
.then(()=> console.log("Mongodb connected successfully"))
// .set("view engine", "ejs")

module.exports = app
