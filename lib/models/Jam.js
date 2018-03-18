const mongoose = require('mongoose')
const Schema = mongoose.Schema

const jamSchema = new Schema({
  skater1: {
    type: Schema.Types.ObjectId,
    ref: 'Skater',
    required: true,
    initialPass: Number,
    scoringPasses: Array,
  },
  skater2: {
    type: Schema.Types.ObjectId,
    ref: 'Skater',
    required: true,
    initialPass: Number,
    scoringPasses: Array,
  },
  runTime: {
    type: Number,
    required: true
  }
})

const Jam = mongoose.model('Jam', jamSchema)

module.exports = Jam
