'use strict'
const { required } = require("../../lib/utils")

const { upsert, get, paginate } = require('../../models/requests')

function createNewRequests(data) {
  return upsert({ query: { user_id: data.user_id, endpoint: data.endpoint, method: data.method, status: data.status }, update:data })
}

function findRequestAndRender({ endpoint = required("endpoint"), method = required("method"), user_id =required("user_id"), status=required("status") }){
 return get({ query: { endpoint, method, user_id, status } })
}

function  paginateRequests({ user_id, page, limit }){
return paginate({ query: { user_id }, page, limit })
}


function deleteMockRequest({ user_id, request_id }){
  
}



module.exports = {
  createNewRequests,
  findRequestAndRender,
  paginateRequests
}
