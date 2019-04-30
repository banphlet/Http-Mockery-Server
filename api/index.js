'use strict'
const config = require('../config')
const server = require('./server')
const { app, handle } = require('./next')
const { createRequest, handleDynamicRoutes, creatNewUser,fetchAllrequests } = require('./actions')
const { verify } = require('../lib/jwt')

const middleWare = async (req, res, next)=>{
  try {
    const headers =req.header("X-MOCKERY-TOKEN")
    if(!headers){
      throw new Error("invalid headers")
    }
    const token = await verify(headers)
    if(!token.id) return next("Token expired")
    req.userId =token.id
    next()
  } catch (error) {
    res.status(400).json(error.message)
  }
}

// app.prepare().then(() => {
  server
    .post('/requests', middleWare, createRequest)
    .get("/all-requests", middleWare, fetchAllrequests)
    .get('/generate', (req, res) => {
      const query = req.query
      app.render(req, res, '/generate', query)
    })
    .get("/users", (req, res)=> app.render(req, res, '/users'))
    .get("/requests", (req, res)=> app.render(req, res, '/requests'))
    .post("/users", creatNewUser)
    .use("*", handleDynamicRoutes)
    .listen(config('PORT'), () => {
      console.log(`> Ready on http://localhost:${config('PORT')}`)
    })
// })
