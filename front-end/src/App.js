import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Main from './components/Main'
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

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/main"
          element={
            <Main
              calories={calories}
              submit={submit}
              handleSubmitChange={handleSubmitChange}
              handleSubmit={handleSubmit}
            />
          }
        />
      </Routes>
    </div>
  )
}

export default App
