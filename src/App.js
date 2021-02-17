import './App.css';
import locations from './database/locations.json';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleLocation from './pages/SingleLocation'
import Error from './pages/Error'
// import components
import Navbar from './components/Navbar'

function App() {
  const [selectedLocation, setSelectedLocation] = useState(null)
  return (
    <div className="App">
      {!selectedLocation ?
        locations.map(location =>  <div onClick={()=>setSelectedLocation(location)}>{location.name}</div>)
       : <div>
          ...INSERT SELECTED LOCATION DATA HERE...
        </div>}
      {!!selectedLocation &&  <div onClick={()=>setSelectedLocation(null)}>{"<- BACK"}</div>}
    </div>
  );
}

export default App;
