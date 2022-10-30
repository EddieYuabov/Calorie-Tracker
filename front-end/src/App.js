import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Main from './components/Main'
import axios from 'axios'
import './App.css'

function App() {
  const [calories, updateCalories] = useState([])
  const [submit, updateSubmit] = useState({ name: '', amount: '' })
  const [remove, updateRemove] = useState({ id: '' })
  const [update, setUpdate] = useState({ id: '', name: '', amount: '' })
  const [total, setTotal] = useState(0)
  const [goal, setGoal] = useState({ amount: '' })

  // Use Effect
  useEffect(() => {
    const caloriesApiCall = async () => {
      let calResponse = await axios.get('http://localhost:3001/calories')
      updateCalories(calResponse.data)
    }
    caloriesApiCall()
  }, [])

  //Handle Change for Add
  const handleSubmitChange = (event) => {
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

  //Handle Change for Delete
  const handleRemoveChange = (event) => {
    updateRemove({ ...remove, [event.target.id]: event.target.value })
  }
  const handleRemove = async (event) => {
    event.preventDefault()
    let deleteItem = await axios
      .delete(`http://localhost:3001/calories/${remove.id}`)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.log(error)
      })
    console.log(deleteItem)
    updateCalories([...calories])
    updateRemove({ id: '' })
  }

  //Handle Change for Update
  const handleUpdateChange = (event) => {
    setUpdate({ ...update, [event.target.id]: event.target.value })
  }
  const handleUpdate = async (event) => {
    let updateItem = await axios
      .put(`http://localhost:3001/calories/${update.id}`, update)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.log(error)
      })
    setUpdate({ id: '', name: '', amount: '' })
  }
  //Handle Change for Total
  const handleTotal = () => {
    calories.forEach((calorie) => {
      let amount = parseInt(calorie.amount)
      setTotal(total + amount)
    })
  }
  //Set Goal
  const handleGoalChange = (event) => {
    setGoal({ ...goal, [event.target.id]: event.target.value })
  }

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              amount={goal.amount}
              goal={goal}
              handleGoalChange={handleGoalChange}
            />
          }
        />
        <Route
          path="/main"
          element={
            <Main
              name={submit.name}
              amount={submit.amount}
              item={submit.item}
              calories={calories}
              submit={submit}
              remove={remove}
              update={update}
              total={total}
              handleSubmitChange={handleSubmitChange}
              handleSubmit={handleSubmit}
              handleRemoveChange={handleRemoveChange}
              handleRemove={handleRemove}
              handleUpdateChange={handleUpdateChange}
              handleUpdate={handleUpdate}
              handleTotal={handleTotal}
              goalAmount={goal.amount}
            />
          }
        />
      </Routes>
    </div>
  )
}

export default App
