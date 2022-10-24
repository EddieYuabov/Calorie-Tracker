const mongoose = require('mongoose')

mongoose
  .connect(
    'mongodb+srv://Eddie_Yuabov:Puffgames1@cluster0.hpxbnfl.mongodb.net/CalorieTrackerDB'
  )
  .then(() => {
    console.log('Successfully connected to MongoDB')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })

mongoose.set('debug', true)

const db = mongoose.connection

module.exports = db
