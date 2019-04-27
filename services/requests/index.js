'use strict'
const { required } = require("../../lib/utils")

const { upsert, get } = require('../../models/requests')

function createNewRequests(data) {
  return upsert({ query: { user_id: data.user_id, endpoint: data.endpoint, method: data.method }, update:data })
}

function findRequestAndRender({ endpoint = required("endpoint"), method = required("method") }){
 return get({ query: { endpoint, method } })
}



module.exports = {
  createNewRequests,
  findRequestAndRender
}
