import "./App.css"; 
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Trips from "./Trips";
import Notes from "./Notes";

function App(){

  return <Router>
  <nav>
    <Link to="/" className="link">Home</Link>
    <Link to ="/aboutus" className="link">About us</Link>
    <Link to ="/trips" className="link">Trips</Link>
    <Link to ="/notes" className="link">Notes</Link>
  </nav>

  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/aboutus" element ={<AboutUs/>}/>
    <Route path="/trips" element ={<Trips/>}/>
    <Route path="/notes" element ={<Notes/>}/>
  </Routes>
  </Router>
}
export default App;

