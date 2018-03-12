mongoose = require('mongoose')

const skaterSchema = new mongoose.Schema({
  derbyName: String,
  legalName: String,
  number: Number,
  roles: Array,
})

const Skater = mongoose.model('Skater', skaterSchema)

module.exports = Skater
