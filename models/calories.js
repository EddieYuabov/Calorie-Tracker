const { Schema } = require('mongoose')

const Calories = new Schema(
  {
    amount: { type: String, require: true }
  },
  { timestamps: true }
)

module.exports = Calories
