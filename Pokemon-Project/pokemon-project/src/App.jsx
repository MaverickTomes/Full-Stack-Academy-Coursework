
import { Routes, Route, Link } from "react-router-dom"
import Home from './Components/Home'
import './App.css'
import PokemonList from './Components/PokemonList'


function App() {


  return (
    <>
     <h1>Gotta Catch Them All!</h1>
     <div id="navbar">
      <Link to="/Home">Home</Link>
      <Link to="/PokemonList">Pokemon List</Link>
     </div>
     <div id="route-path">
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/pokemonlist" element={<PokemonList />}/>
      </Routes>
     </div>
     <div id="pokemon-list">

     </div>
    </>
  )
}

export default App


