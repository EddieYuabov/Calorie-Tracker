import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [calories, updateCalories] = useState([])
  const [submit, updateSubmit] = useState({ name: '', amount: '' })
  const [remove, updateRemove] = useState({ name: '' })

  useEffect(() => {
    const caloriesApiCall = async () => {
      let calResponse = await axios.get('http://localhost:3001/calories')
      updateCalories(calResponse.data)
    }
    caloriesApiCall()
  }, [])

  const handleChange = (event) => {
    updateSubmit({ ...submit, [event.target.id]: event.target.value })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    let newItem = await axios
      .post('http://localhost:3001/calories', submit)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.error(error)
      })
    updateCalories([...calories, newItem.data])
    updateSubmit({ name: '', amount: '' })
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Add food:</h1>
        <label htmlFor="name">Food: </label>
        <input id="name" value={submit.name} onChange={handleChange} />
        <label htmlFor="amount"> Calories: </label>
        <input id="amount" value={submit.amount} onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
      <form>
        <h1>Delete Food:</h1>
        <label htmlFor="name">Food: </label>
        <input id="name" />
        <button type="submit">Add</button>
      </form>
      <h1>Output:</h1>
      {calories.map((item) => (
        <div key={item._id}>
          <h3>Food: {item.name}</h3>
          <h3>Amount of calories: {item.amount}</h3>
          <br />
        </div>
      ))}
      <br />
      <h2>Total: </h2>
    </div>
  )
}

export default App
