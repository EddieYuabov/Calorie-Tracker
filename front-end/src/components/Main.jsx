import {Link} from "react-router-dom"

const Main = (props) => {
    return (
      
      <div className="calories">
      <Link to = '/'>Home</Link>
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
      <form>
        <h1>Delete Food:</h1>
        <label htmlFor="name">Food: </label>
        <input id="name" />
        <button type="submit">Add</button>
      </form>
      <h1>Output:</h1>
      {props.calories.map((item) => (
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
  
  export default Main