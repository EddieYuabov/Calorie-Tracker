import {Link} from "react-router-dom"
const Home = () => {

    return (
      <div className="home">
        <h2>Welcome to the Home Page!</h2>
        <br/>
        <form>
            <h1>Fill out form and press submit when finished</h1>
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