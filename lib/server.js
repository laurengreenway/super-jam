const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const init = require('./utils/import')
const Skater = require('./models/Skater')
const Jam = require('./models/Jam')

const app = express()
const PORT = 8080

const uri = 'mongodb://localhost:27017/superjam'

app.use(bodyParser.json())

mongoose
  .connect(uri)
  .then(() => {
    console.log(`Successfully connected to ${uri}`)
    init()
  })
  .catch(err => {
    console.error(err.message)
  })

app.get('/skaters', (req, res) => {
  Skater
  .find({})
  .then(skaters => {
    res.status(200).json({
      message: 'success',
      payload: skaters
    })
  })
  .catch(err => {
    res.status(500).json({
      message: err.message
    })
  })
})

app.get('/jams', (req, res) => {
  Jam.find({})
  .populate('skater')
  .then(jams => {
    res.status(200).json({
      message: 'you did it!',
      payload: jams
    })
  }).catch(err => {
    res.status(500).json({
      message: err.message
    })
  })
})

app.get('/skaters/:skater', (req, res) => {
  const {skater} = req.data
  res.status(201).json({
    message: 'success!',
    payload: skater
  })
})

app.post('/jams', (req, res) => {
    console.log('hello lauren')
    console.log('** REQUEST DATA', req.body)
    const { runTime, log } = req.body
    res.status(200).json({
      message: 'success!',
      payload: req.body
    })
})

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})
