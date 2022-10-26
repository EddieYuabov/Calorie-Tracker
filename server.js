const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Food, Calories } = require('./models')

const app = express()

app.use(express.json()) //search
app.use(cors())
app.use(express.static(`${__dirname}/front-end/build`))

//FOOD
//Get foods
app.get('/food', async (req, res) => {
  let getFood = await Food.find()
  res.json(getFood)
})
//Create food
app.post('/food', async (req, res) => {
  let createFood = await Food.create(req.body)
  res.json(createFood)
})
//Delete food
app.delete('/food/:id', async (req, res) => {
  let deleteFood = await Food.findByIdAndDelete(req.params.id)
  res.json(deleteFood)
})

//CALORIES
//Get calories
app.get('/calories', async (req, res) => {
  const getCalories = await Calories.find({})
  res.json(getCalories)
})
//Create calories
app.post('/calories', async (req, res) => {
  let exampleCaloriesId = '635861db44c547834d6f451a'
  const requestBody = { ...req.body, food: exampleCaloriesId }
  const createCalories = await Calories.create(requestBody)
  console.log(requestBody) // check this
  res.json(createCalories)
})

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/front-end/build/index.html`)
})
app.listen(PORT, () => {
  console.log(`Express server is listening on port: ${PORT}`)
})
