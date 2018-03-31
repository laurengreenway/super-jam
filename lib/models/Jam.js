const mongoose = require('mongoose')
const Schema = mongoose.Schema

// const entrySchema = new Schema({
//   skaterId: { type: Schema.Types.ObjectId, ref: 'Skater', required: true },
//   time: { type: Number, required: true }
// })

const jamSchema = new Schema({
  runTime: { type: Number, required: true},
  log: Array
})

const Jam = mongoose.model('Jam', jamSchema)

module.exports = Jam
