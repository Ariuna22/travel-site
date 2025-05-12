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
import Cities from "./Cities/Cities";
import React from "react";
import { Provider } from 'react-redux';
import store from './Cities/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <nav>
          <Link to="/" className="link">Home</Link>
          <Link to="/aboutus" className="link">About us</Link>
          <Link to="/trips" className="link">Trips</Link>
          <Link to="/cities" className="link">Cities</Link>
          <Link to="/notes" className="link">Notes</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

