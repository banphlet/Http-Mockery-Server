'use strict'



'use strict'
const { required } = require('../lib/utils')
const mongoose = require("mongoose")
const mongoosePaginate = require('mongoose-paginate-v2');


module.exports = function baseModel ({ modelName=required("modelName"), schema=required("schema") }){
  schema.plugin(mongoosePaginate);
  const Model = mongoose.model(modelName, schema)
    return {
        create: async function create(data = required('data')) {
            const newModel = new Model(data)
            const model = await newModel.save()
            return model.toObject()
          },
          get: function get({ query = required('query') }) {
            return Model.findOne(query)
              .lean()
              .exec()
          },
          upsert: async function upsert({ query=required("query"), update= required("update") }){
            const document = await Model.findOne(query).lean().exec()
            if(document){
              return Model.findOneAndUpdate(query, update).lean().exec()
            }

            return Model.create(update)
          },
          paginate: async function paginate({ query= required("query"), page=1, limit=10 }){
            const customLabels = {
              docs: 'data',
              limit: 'perPage',
              page: 'currentPage',
              nextPage: 'nextPage',
              prevPage: 'prevPage',

          };

          const options = {
            page,
            limit,
            customLabels
        };

            return Model.paginate(query, options)
          }
    }
}