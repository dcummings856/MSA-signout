const mongoose = require('mongoose')

const SignoutsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  msa: {
    type: Number,
    required: true,
  },
  key: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Signouts', SignoutsSchema)