const mongoose = require('mongoose')
const Skater = require('../models/Skater')

const skaters = [
  {
    derbyName: 'Ann Bulance',
    legalName: 'Jenn Keenan',
    number: 911,
    roles: ['Pivot', 'Blocker', 'Jammer']
  },
  {
    derbyName: 'Boba Fatale',
    legalName: 'June Epstein',
    number: 8084,
    roles: ['Blocker']
  },
  {
    derbyName: 'Brawnson',
    legalName: 'Natalie Ronson',
    number: 709,
    roles: ['Jammer']
  },
  {
    derbyName: 'Demerits Targaryen',
    legalName: 'Lauren Greenway',
    number: 3,
    roles: ['Coach']
  },
  {
    derbyName: 'Dolly Dagger',
    legalName: 'Devon Van Buskirk',
    number: 7,
    roles: ['Blocker']
  },
  {
    derbyName: 'Fight of the Concords',
    legalName: 'Raven Cameron',
    number: 64,
    roles: ['Blocker', 'Pivot']
  },
  {
    derbyName: 'Gonzo',
    legalName: 'Zoe Brownstein',
    number: 95,
    roles: ['Jammer', 'Blocker']
  },
  {
    derbyName: 'Helena Beat\'em Harder',
    legalName: 'Jasmine Carbone',
    number: 2,
    roles: ['Blocker']
  },
  {
    derbyName: 'Hell Girl',
    legalName: 'Laura Naccarato',
    number: 12,
    roles: ['Blocker']
  },
  {
    derbyName: 'Jammerhead Shark',
    legalName: 'Bethan Davies',
    number: 16,
    roles: ['Pivot', 'Captain']
  },
  {
    derbyName: 'Jessica Rabid',
    legalName: 'Jessy Livingston-Thomas',
    number: 007,
    roles: ['Pivot', 'Jammer', 'Captain']
  },
  {
    derbyName: 'Juggernaut J',
    legalName: 'Jacqueline Menagh',
    number: 339,
    roles: ['Blocker']
  },
  {
    derbyName: 'Killa Hurtz',
    legalName: 'Brandi Charlaine Ziegler',
    number: 1000,
    roles: ['Jammer']
  },
  {
    derbyName: 'Mia Culprit',
    legalName: 'Jenna Cloughley',
    number: 22,
    roles: ['Blocker']
  },
  {
    derbyName: 'Pikacheek',
    legalName: 'Meagan Moore',
    number: 2442,
    roles: ['Blocker']
  },
  {
    derbyName: 'Pikante',
    legalName: 'Joana Soares',
    number: 1314,
    roles: ['Jammer', 'Pivot']
  },
  {
    derbyName: 'Redneck',
    legalName: 'Ryan Harrietha',
    number: null,
    roles: ['Blocker']
  },
  {
    derbyName: 'Sticky Mitts',
    legalName: 'Michael Robinson',
    number: 513,
    roles: ['Coach']
  },
  {
    derbyName: 'Viris',
    legalName: 'Iris Bigonia',
    number: 1013,
    roles: ['Blocker']
  },
  {
    derbyName: 'XS',
    legalName: 'Stephanie Gunsolus',
    number: 00,
    roles: ['Blocker', 'Pivot']
  },
]

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
