import { Routes, Route, Link } from "react-router-dom";
import Blue from "./Components/Blue";
import Red from "./Components/Red";
import Home from "./Components/Home";

import './App.css'

function App() {
  

  return (
    <>
      <h2>Color Picker</h2>
       <div id="container">
      <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="/blue">Blue Page</Link>
        <Link to="/red">Red Page</Link>
        
        </div>
      <div id="main-section">
        <Routes>
          <Route path="/" element={Home()} />
          <Route path="/blue" element={Blue()} />
          <Route path="/red" element={Red()} />
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
