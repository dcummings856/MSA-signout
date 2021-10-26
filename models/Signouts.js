const mongoose = require('mongoose')

const SignoutsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  msa: {
    type: Number,
    required: false,
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
    type: String,
  },
  updatedAt: {
    type: String,
  }
},
// {
//   timestamps: true,
// },
{
  writeConcern: {
    w: 'majority',
    j: true,
    wtimeout: 1000
  }
})

module.exports = mongoose.model('Signouts', SignoutsSchema)