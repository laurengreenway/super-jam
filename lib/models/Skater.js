const mongoose = require('mongoose')
const Schema = mongoose.Schema

const skaterSchema = new Schema({
  derbyName: {
    type: String,
    required: true
  },
  legalName: {
    type: String,
    default: ''
  },
  number: Number,
  roles: Array,
})

const Skater = mongoose.model('Skater', skaterSchema)

module.exports = Skater
