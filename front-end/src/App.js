import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [food, updateFood] = useState([])
  const [calories, updateCalories] = useState([])

  useEffect(() => {
    const foodApiCall = async () => {
      let foodResponse = await axios.get('http://localhost:3001/food')
      updateFood(foodResponse.data)
    }
    const caloriesApiCall = async () => {
      let calResponse = await axios.get('http://localhost:3001/calories')
      updateCalories(calResponse.data)
    }
    foodApiCall()
    caloriesApiCall()
  }, [])

  return (
    <div className="App">
      <h1>Add food:</h1>
      <form></form>
      <h1>Food Calories:</h1>
      {food.map((item) => (
        <div key={item._id}>
          <h1>{item.name}</h1>
        </div>
      ))}
    </div>
  )
}

export default App
