import {Link} from "react-router-dom"

const Main = (props) => {
    return (
      
      <div className="calories">
      <Link to = '/'>Home</Link>
      
      <div className="forms">
      <form onSubmit={props.handleSubmit}>
        <h1>Add Food:</h1>
        <label className="addFoodLabel" htmlFor="name">Food: </label>
        <input className="addFoodInput" id="name" value={props.submit.name} onChange={props.handleSubmitChange} />
        <br/>
        <br/>
        <label htmlFor="amount"> Calories: </label>
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
        <h1>Delete Food:</h1>
        <label className="deleteLabel" htmlFor="id">Id: </label>
        <input className="deleteInput" id="id" value = {props.remove.id} onChange={props.handleRemoveChange}/>
        <br/>
        <br/>
        <button type="submit">Delete</button>
      </form>
      
      <form onSubmit={props.handleUpdate}>
      <h1>Update Food:</h1>
        <label className="updateIdLabel" htmlFor="id">Id: </label>
        <input className="updateIdInput" id="id" value={props.update.id} onChange ={props.handleUpdateChange}/>
        <br/>
        <br/>
        <label className="updateFoodLabel"> Food: </label>
        <input className="updateFoodInput" id='name' value={props.update.name} onChange={props.handleUpdateChange}/>
        <br/>
        <br/>
        <label > Calories: </label>
        <input  id='amount' value={props.update.amount} onChange={props.handleUpdateChange}/>
        <br/>
        <br/>
        <button type="submit">Update</button>
      </form>
      </div>
      <div className="output">
      <h1>Foods:</h1>
      {props.calories.map((item) => (
        <div key={item._id}>
          <h3>Food: {item.name}</h3>
          <h3>Amount of calories: {item.amount}</h3>
          <h5>ID: {item._id}</h5>
          <br />
        </div>
      ))}
      <hr/>
      <h2>Total: 330</h2>
      </div>
      </div>
    )
  }
  
  export default Main