import {Link} from "react-router-dom"
import Home from "./Home"

const Main = (props) => {
    return (
      
      <div className="calories">
      
      <div className="forms">
      <form onSubmit={props.handleSubmit}>
        <h1  className="form-headers">Add Food</h1>
        <label className="color" htmlFor="name">Food: </label>
        <input className="addFoodInput" id="name" value={props.submit.name} onChange={props.handleSubmitChange} />
        <br/>
        <br/>
        <label className="color" htmlFor="amount"> Calories: </label>
        <input
          id="amount"
          value={props.submit.amount}
          onChange={props.handleSubmitChange}
        />
        <br/>
        <br/>
        <button type="submit">Add</button>
      </form>

      <form onSubmit={props.handleRemove}>
        <h1 className="form-headers">Delete Food</h1>
        <label className="color" htmlFor="id">Id: </label>
        <input className="deleteInput" id="id" value = {props.remove.id} onChange={props.handleRemoveChange}/>
        <br/>
        <br/>
        <button type="submit">Delete</button>
      </form>
      
      <form onSubmit={props.handleUpdate}>
      <h1 className="form-headers">Update Food</h1>
        <label className="color" htmlFor="id">Id: </label>
        <input className="updateIdInput" id="id" value={props.update.id} onChange ={props.handleUpdateChange}/>
        <br/>
        <br/>
        <label className="color"> Food: </label>
        <input className="updateFoodInput" id='name' value={props.update.name} onChange={props.handleUpdateChange}/>
        <br/>
        <br/>
        <label className="color" > Calories: </label>
        <input  id='amount' value={props.update.amount} onChange={props.handleUpdateChange}/>
        <br/>
        <br/>
        <button className="update-button" type="submit">Update</button>
      </form>
      </div>
      <div className="output">
      <h1>Foods:</h1>
      <hr/>
      {props.calories.map((item) => (
        <div key={item._id}>
          <h3>Food: {item.name}</h3>
          <h3>Amount of calories: {item.amount}</h3>
          <h5>ID: {item._id}</h5>
          <br />
        </div>
      ))}
      <hr/>
      <button className="calculate-button" onClick={props.handleTotal}>Calculate</button>
      <h2 className="total" >Total: {props.total}</h2>
      <h2>Goal: {props.goalAmount}</h2>
      </div>
  
      <Link className="home-link" to = '/'>Home</Link>
      </div>
      
    )
  }
  
  export default Main