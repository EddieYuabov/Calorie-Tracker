import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('http://localhost:3001/food')
      return response
    }
    console.log(apiCall())
  }, [])

  return (
    <div className="App">
      <h1>Food Calories:</h1>
    </div>
  )
}

export default App
