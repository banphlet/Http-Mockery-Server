'use strict'

const mongoose = require('mongoose')

const schema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    },
    endpoint: {
      type: String,
      required: true
    },
    headers: {
      type: [{ type: String }],
      required: true,
      default: [],
    },
    body: {
      type: String,
      required: true,
    },
    method: {
      type: String,
      required: true,
      enum: ['post', 'get', 'put', 'delete'],
    },
    status: {
      type: Number,
      default: 200,
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
)

module.exports = schema
