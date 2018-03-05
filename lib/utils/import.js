const mongoose = require('mongoose')
const Skater = require('../models/Skater')

const skaters = [
  {
    derbyName: 'Demerits Targaryen',
    legalName: 'Lauren Greenway',
    number: 3,
    roles: ['Coach']
  },
  {
    derbyName: 'Sticky Mitts',
    legalName: 'Michael Robinson',
    number: 513,
    roles: ['Coach']
  },
  {
    derbyName: 'Jessica Rabid',
    legalName: 'Jessy Livingston-Thomas',
    number: 007,
    roles: ['Pivot', 'Jammer', 'Captain']
  },
  {
    derbyName: 'Jammerhead Shark',
    legalName: 'Bethan Davies',
    number: 16,
    roles: ['Pivot', 'Captain']
  },
]

// const uri = 'mongodb://localhost:27017/superjam'

const init = () => {
  Skater.remove({}).then(() => {
    const team = skaters.map(skater => {
      return new Skater(skater)
    })
    team.map(skater => {
      skater.save().then(console.log).catch(e => console.error(e.message))
    })
  })
}

module.exports = init

// mongoose
//   .connect(uri)
//   .then(() => {
//     console.log(`Successfully connected to ${uri}`)
//     Skater.remove({}).then(init)
//   })
//   .catch(err => {
//     console.error(err.message)
//   })
