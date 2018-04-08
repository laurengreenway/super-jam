const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const config = require('config')
const path = require('path')

const init = require('./utils/import')
const Skater = require('./models/Skater')
const Jam = require('./models/Jam')

const app = express()

const PORT = process.env.PORT || config.PORT;
const MONGOOSE_URI = process.env.MONGODB_URI || config.MONGODB_URI;

app.use(bodyParser.json())

app.use('/', express.static(path.join(__dirname, '../build')))

mongoose
  .connect(MONGOOSE_URI)
  .then(() => {
    console.log(`Successfully connected to ${PORT} 💫`)
    init()
  })
  .catch(err => {
    console.error(err.message)
  })

app.get('/skaters', (req, res) => {
  Skater.find({})
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
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      })
    })
})

app.get('/skaters/:skater', (req, res) => {
  const { skater } = req.data
  res
    .status(201)
    .json({
      message: 'success!',
      payload: skater
    })
    .catch(err => {
      res.status(500).json({
        error: err.message
      })
    })
})

app.post('/jams', (req, res) => {
  console.log(req.body)
  const { elapsedTime, log } = req.body
  const jam = new Jam({
    runTime: elapsedTime,
    log
  })
  jam
    .save()
    .then(doc => {
      res.status(200).json({
        message: 'success!',
        payload: doc
      })
    })
    .catch(err => {
      res.status(500).json({
        error: err.message
      })
    })
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build'))
})

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})
