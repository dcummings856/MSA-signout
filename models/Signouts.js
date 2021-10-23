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
  complete: {
    type: Boolean,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
},
{
  timestamps: true,
},
{
  writeConcern: {
    w: 'majority',
    j: true,
    wtimeout: 1000
  }
})

module.exports = mongoose.model('Signouts', SignoutsSchema)