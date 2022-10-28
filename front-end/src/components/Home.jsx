import {Link} from "react-router-dom"
const Home = () => {

    return (
      <div className="home">
        <h1>Calorie Tracker</h1>
        <br/>
        <form>
            <h2>Fill out form and press submit when finished</h2>
        <label>Name: </label>
        <input/>
        <br/>
        <br/>
        <label> Age: </label>
        <input/>
        <br/>
        <br/>
        <label>Height: </label>
        <input/>
        <br/>
        <br/>
        <label>Weight: </label>
        <input/>
        <br/>
        <br/>
        <button type="submit"><Link to = 'Main'>Submit</Link></button>
        </form>
      </div>
    )
  }
  
  export default Home