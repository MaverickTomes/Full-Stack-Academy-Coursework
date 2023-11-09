// This is a demo app.jsx its not connected to vite so it will not display. Just foolow along for reference
//useing recepies api example

import { useState, useEffect } from 'react'
import RecipesList from './RecipiesList';
import AddRecipeForm from '../../Add RecipeForm';

import './App.css'



function App() {

  const [ recepies, setRecipes ] = useState([]);  
  
useEffect(() => {

    async function fetchRecipies() {
      let response = await fetch (`${API_URL}/recipies`)
      let json = await response.json()


    setRecipes(json.data)
      }

      fetchRecipies() 

    }, [])

  return (
    <>
      <h1>Hello World</h1>

      <RecipesList  recipes={recepies}/>  <h1>Add the function here from recipies list</h1>

      <AddRecipeForm loadRecipes={loadRecipes}/>

    </>
  );
}

export default App
