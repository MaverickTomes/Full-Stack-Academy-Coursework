import { useState, useEffect } from "react" //can add them both if they are coming from react
import Recipe from "./Recipe";
import AddRecipeForm from "../../Add RecipeForm";

let API_URL = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2109-CPU-RM-WEB-PT/" // make sure you add your cohort in the future

function RecipesList ( {recepies} ) {

/*
const [ recepies, setRecipes ] = useState([]);  //<--- grab it and put it into an array or 
//change it to an object if thats wthat the data is

useEffect(() => {

    async function fetchRecipies() {
      let response = await fetch (`${API_URL}/recipies`)
      let json = await response.json()

    //console log to see what it looks like and make sure it shows up
    setRecipes(json.data)
      }

      fetchRecipies() //<-- if its done right it should work, dont forget to import it in the app.jsx

    }, []); //<--- if you add the empty sqaure brackets it will make sure this only runs once.
*/
    console.log(recepies);
// react needs a key to have an identifyer so it doesn't update or delete the wrong thing
      return <ul className="recipe-list">
        { RecipesList.map(r => <Recipe key={r.id} 
        name={r.name} 
        discription={r.discription} 
        imageUrl={r.imageUrl} />
        )
      }
      </ul>
} 

export default RecipesList