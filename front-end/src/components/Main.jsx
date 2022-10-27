import {Link} from "react-router-dom"

const Main = (props) => {
    return (
      
      <div className="calories">
      <Link to = '/'>Home</Link>
      
      <div className="forms">
      <form onSubmit={props.handleSubmit}>
        <h1>Add food:</h1>
        <label htmlFor="name">Food: </label>
        <input id="name" value={props.submit.name} onChange={props.handleSubmitChange} />
        <label htmlFor="amount"> Calories: </label>
        <input
          id="amount"
          value={props.submit.amount}
          onChange={props.handleSubmitChange}
        />
        <button type="submit">Add</button>
      </form>

      <form onSubmit={props.handleRemove}>
        <h1>Delete Food:</h1>
        <label htmlFor="id">Id: </label>
        <input id="id" value = {props.remove.id} onChange={props.handleRemoveChange}/>
        <button type="submit">Delete</button>
      </form>
      
      <form onSubmit={props.handleUpdate}>
      <h1>Update Food:</h1>
        <label htmlFor="id">Id: </label>
        <input id="id" value={props.update.id} onChange ={props.handleUpdateChange}/>
        <label> Food: </label>
        <input id='name' value={props.update.name} onChange={props.handleUpdateChange}/>
        <label> Calories: </label>
        <input id='amount' value={props.update.amount} onChange={props.handleUpdateChange}/>
        <button type="submit">Update</button>
      </form>
      </div>
      <div className="output">
      <h1>Output:</h1>
      {props.calories.map((item) => (
        <div key={item._id}>
          <h3>Food: {item.name}</h3>
          <h3>Amount of calories: {item.amount}</h3>
          <h5>ID: {item._id}</h5>
          <br />
        </div>
      ))}
      <br />
      <h2>Total: </h2>
      </div>
      </div>
    )
  }
  
  export default Main