const mongoose = require('mongoose')
const Schema = mongoose.Schema

const entrySchema = new Schema({
  skaterId: { type: String, required: true },
  pass: { type: Number, required: true },
  time: { type: Number, required: true }
})

const jamSchema = new Schema({
  runTime: { type: Number, required: true},
  date: Date,
  log: [entrySchema]
})

const Jam = mongoose.model('Jam', jamSchema)

module.exports = Jam
