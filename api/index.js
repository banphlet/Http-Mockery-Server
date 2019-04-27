'use strict'
const config = require('../config')
const server = require('./server')
const { app, handle } = require('./next')
const { createRequest, handleDynamicRoutes, creatNewUser } = require('./actions')
const { verify } = require('../lib/jwt')

const middleWare = async (req, res, next)=>{
  const headers =req.header("X-MOCKERY-TOKEN")
    const token = await verify(headers)
    if(!token.id) return next("Token expired")
    req.userId =token.id
    next()
}

app.prepare().then(() => {
  server
    .post('/requests', middleWare, createRequest)
    .get('/generate', (req, res) => {
      const query = req.query
      app.render(req, res, '/generate', query)
    })
    .get("/users", (req, res)=> app.render(req, res, '/users'))
    .post("/users", creatNewUser)
    .use("*", handleDynamicRoutes)
    .listen(config('PORT'), () => {
      console.log(`> Ready on http://localhost:${config('PORT')}`)
    })
})
