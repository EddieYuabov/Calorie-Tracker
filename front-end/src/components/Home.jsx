import {Link} from "react-router-dom"
const Home = (props) => {

    return (
      <div className="home">
        <h1 className="home-title" >Calorie Tracker</h1>
        <br/>
        <form>
            <h2>Fill out form and press submit when finished</h2>
        <label className="color-border" >Name: </label>
        <input/>
        <br/>
        <br/>
        <label className="age-label" > Age: </label>
        <input className="age-input"/>
        <br/>
        <br/>
        <label className="color-border" >Height: </label>
        <input/>
        <br/>
        <br/>
        <label className="color-border" >Weight: </label>
        <input/>
        <br/>
        <br/>
        <h2>What is your goal?</h2>
        <p>(Enter amount of calories per day)</p>
        <input id="amount" value={props.goal.amount} onChange={props.handleGoalChange} />
        <br/>
        <br/>
        <button type="submit"><Link to = 'Main'>Submit</Link></button>
        </form>
      </div>
    )
  }
  
  export default Home