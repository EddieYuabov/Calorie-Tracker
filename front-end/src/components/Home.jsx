import {Link} from "react-router-dom"
const Home = () => {

    return (
      <div className="home">
        <h2>Welcome to the Home Page!</h2>
        <br/>
        <Link to = 'Main'>Main</Link>
      </div>
    )
  }
  
  export default Home