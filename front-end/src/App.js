import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  // const [food, updateFood] = useState([])
  const [calories, updateCalories] = useState([])
  const [submit, updateSubmit] = useState({ name: '', amount: '' })

  useEffect(() => {
    // const foodApiCall = async () => {
    //   let foodResponse = await axios.get('http://localhost:3001/food')
    //   updateFood(foodResponse.data)
    // }
    const caloriesApiCall = async () => {
      let calResponse = await axios.get('http://localhost:3001/calories')
      updateCalories(calResponse.data)
    }
    // foodApiCall()
    caloriesApiCall()
  }, [])

  const handleChange = (event) => {
    updateSubmit({ ...submit, [event.target.id]: event.target.value })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(submit)
  }

  return (
    <div className="App">
      <h1>Add food:</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Food: </label>
        <input id="name" value={submit.name} onChange={handleChange} />
        <br />
        <br />
        <label htmlFor="amount">Calories: </label>
        <input id="amount" value={submit.amount} onChange={handleChange} />
        <br />
        <br />
        <button type="submit">Add</button>
      </form>
      <h1>Output:</h1>
      {calories.map((item) => (
        <div key={item._id}>
          <h2>Food: {item.name}</h2>
          <h2>Amount of calories: {item.amount}</h2>
        </div>
      ))}
      <br />
      <h2>Total: </h2>
    </div>
  )
}

export default App
