const { Schema } = require('mongoose')

const Food = new Schema(
  {
    name: { type: String, require: true }
  },
  { timestamps: true }
)

module.exports = Food
