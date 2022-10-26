import {Link} from "react-router-dom"
const Home = () => {

    return (
      <div className="home">
        <h2>Welcome to the home Page!</h2>
        <br/>
        <Link to = '/calories'></Link>
      </div>
    )
  }
  
  export default Home