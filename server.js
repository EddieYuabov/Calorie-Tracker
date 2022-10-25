const express = require('express')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Food } = require('./models')
const { Calories } = require('./models')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send({ msg: 'This route is being hit' })
})

//create food
app.post('/food', async (req, res) => {
  let createdFood = await Food.create(req.body)
  res.json(createdFood)
})

//get foods
app.get('/food', async (req, res) => {
  let getFood = await Food.find()
  res.json(getFood)
})
//delete food
app.delete('/food/:id', async (req, res) => {
  let deletedFood = await Food.findByIdAndDelete(req.params.id)
  res.json(deletedFood)
})

app.listen(PORT, () => {
  console.log(`Express server is listening on port: ${PORT}`)
})
