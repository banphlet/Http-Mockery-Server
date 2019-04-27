'use strict'
/**
 * @typedef {import Request ('express/lib/request')} 
 * @typedef {import Response ('express/lib/response')}
 * 
 */
const { createNewRequests, findRequestAndRender } = require('../../services/requests')
const { createUser } = require('../../services/user')

async function createRequest(req, res, next) {
  try {
    req.body.user_id = req.userId
  const response = await createNewRequests(req.body)
  res.json({ success: true, data: response })
  } catch (error) {
    res.status(400).json(error.message)    
  }
}

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @param {Function} next 
 */
async function handleDynamicRoutes(req, res, next){
const endpoint =  req.baseUrl.slice(1)
const method = req.method.toLowerCase()
const data = await findRequestAndRender({ endpoint, method })
if(!data) return res.status(400).json({ error: {message: "route not found"} })
  res.status(data.status).send(data.body)
}


async function creatNewUser(req, res, next){
const response = await createUser(req.body)
return res.json({ data: response })
}


module.exports = {
  createRequest,
  handleDynamicRoutes,
  creatNewUser
}
