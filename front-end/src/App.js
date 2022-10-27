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
    updateRemove({ id: '' })
  }
  const handleUpdateChange = (event) => {
    setUpdate({ ...update, [event.target.id]: event.target.value })
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
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
              handleSubmitChange={handleSubmitChange}
              handleSubmit={handleSubmit}
              handleRemoveChange={handleRemoveChange}
              handleRemove={handleRemove}
              handleUpdateChange={handleUpdateChange}
            />
          }
        />
      </Routes>
    </div>
  )
}

export default App
