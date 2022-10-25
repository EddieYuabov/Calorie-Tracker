const { Schema } = require('mongoose')

const Calories = new Schema(
  {
    amount: { type: String, require: true },
    food: { type: Schema.Types.ObjectId, ref: 'food' }
  },
  { timestamps: true }
)

module.exports = Calories
