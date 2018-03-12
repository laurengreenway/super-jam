const express = require('express')
const mongoose = require('mongoose')
const init = require('./utils/import')
const Skater = require('./models/Skater')

const app = express()
const PORT = 8080

const uri = 'mongodb://localhost:27017/superjam'

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
  Skater.find({}).then(skaters => {
    res.status(200).json({
      skaters
    })
  })
})

app.post('/skaters/:skater', (req, res) => {
  console.log('** REQUEST DATA', req.data)
  // skaters.push(skater)
  res.status(201).json({
    message: 'success!',
    skaters
  })
})

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})
