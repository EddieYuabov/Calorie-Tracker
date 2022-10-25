const mongoose = require('mongoose')
const FoodSchema = require('./food')
const CaloriesSchema = require('./calories')

const Food = mongoose.model('Food', FoodSchema)
const Calories = mongoose.model('Calories', CaloriesSchema)

module.exports = {
  Food,
  Calories
}
