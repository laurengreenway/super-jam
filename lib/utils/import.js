const mongoose = require('mongoose')
const Skater = require('../models/Skater')
const Jam = require('../models/Jam')

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
    derbyName: "Helena Beat'em Harder",
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
    derbyName: 'Risque',
    legalName: 'Lisa Vance',
    number: 1301,
    roles: ['Jammer']
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
  }
]

const jammers = [
  '5abfdec7cbe3307123da2f83',
  '5abfdec7cbe3307123da2f86',
  '5abfdec7cbe3307123da2f81',
  '5abfdec7cbe3307123da2f7d',
  '5abfdec7cbe3307123da2f79'
]
//
// const jams = [
//   {
//     runTime: 13707,
//     log: [
//       {
//         skaterId: jammers[0],
//         time: 4500
//       },
//       {
//         skaterId: jammers[3],
//         time: 5500
//       },
//       {
//         skaterId: jammers[0],
//         time: 10500
//       }
//     ]
//   },
//   {
//     runTime: 13707,
//     log: [
//       {
//         skaterId: jammers[1],
//         time: 4500
//       },
//       {
//         skaterId: jammers[4],
//         time: 5500
//       },
//       {
//         skaterId: jammers[1],
//         time: 10500
//       }
//     ]
//   },
//   {
//     runTime: 18707,
//     log: [
//       {
//         skaterId: jammers[2],
//         time: 4500
//       },
//       {
//         skaterId: jammers[3],
//         time: 10500
//       },
//       {
//         skaterId: jammers[2],
//         time: 10000
//       },
//       {
//         skaterId: jammers[2],
//         time: 18000
//       }
//     ]
//   }
// ]

const init = () => {
  Skater.remove({}).then(() => {
    const team = skaters.map(skater => {
      return new Skater(skater)
    })
    team.map(skater => {
      skater
        .save()
        .then(console.log)
        .catch(e => console.error(e.message))
    })
  })
  // Jam.remove({}).then(() => {
  //   const drill = jams.map(jam => {
  //     return new Jam(jam)
  //   })
  //   drill.map(jams => {
  //     jams
  //       .save()
  //       .then(console.log)
  //       .catch(e => console.error(e.message))
  //   })
  // })

}

module.exports = init
