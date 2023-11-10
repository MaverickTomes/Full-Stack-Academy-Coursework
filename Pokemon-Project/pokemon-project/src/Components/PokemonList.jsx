import { useState, useEffect } from "react";

const API ="https://pokeapi.co/api/v2/pokemon/"

function PokemonList () {
  
    const [pokemonData, setPokemonData] = useState([]);
    
  
    useEffect(() => {
      async function fetchPokemon() {
        try {
          let response = await fetch(API);
          let json= await response.json();
          setPokemonData(json.results);
        } catch (error) {
          console.error(error);
        }
      }
      fetchPokemon();
    }, []);

    return ( 
      <>
      
      <h1>Pokemon Full List</h1>

      <ul>
        {pokemonData.map((pokemon, index) => (
          <li key={index}> name={pokemon.name}</li>
        ))}

      </ul>
  
      </>

);

}

export default PokemonList;