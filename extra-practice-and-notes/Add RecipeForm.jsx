import { useState } from "react"

function AddRecipeForm ( {loadRecipes} ) {

  const [ name, setName ] = useState("")
  const [ description, setDescription ] = useState("")
  const [ ImageUrl, setImageUrl ] = useState("") //<-- did ("") because the data type is a input or strings of data


    function handleSubmit(event) {
      event.preventDefault() //stop the auto page refesh

      let response = await fetch(`${API_URL}/recipies`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          description,
          ImageUrl,
        })
      })

      
    }

//adding the value={name} etc. allows to you update the state w

return <form className="add-form" onSubmit={handleSubmit}>
        <label>Recipe Name:</label>
        <input type="text" value={name} onChange={event => {setName(event.target.value)}} /> 
        <label> Desription:</label>
        <input type="text" value={description} onChange={event => {setDescription(event.target.value)}}/>
        <label>ImageUrl:</label>
        <input type="text" value={ImageUrl} onChange={event => {setImageUrl(event.target.value)}}/>
        <button type="submit">Add Recipe:</button>
        <button type="button" OnClick ={() =>{
            setName("")
            setDescription("")
            setImageUrl("")
        }}>Clear Form</button>
      </form>
    }
//buttons with "type=button" are just normal buttons that do not trigger onSubmit

export default AddRecipeForm