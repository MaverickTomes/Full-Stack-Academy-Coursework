import { useState } from "react";
import { useNavigate } from "react-router-dom";



function Account({ token }) { 

  const navigate = useNavigate()

  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  const [ user, setUser ] = useState("")

 
async function handleClick() { //change to fetch account
    try {
      const response = await fetch(
        "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
      setSuccessMessage(result.message);
    } catch (error) {
      setError(error.message);
    }
  }
  
  return (
    <div>
            <h1>My Account</h1>
            {successMessage && <p>{successMessage}</p>}
            {error && <p>{error}</p>}
            <h2>{user.firstname}{user.lastname}</h2>
            <h2>My Checked Out Books: {user.books}</h2>
            <button onClick={handleClick}>Return Book</button>
            <button onClick={() =>navigate("/")}>Signout</button>
          
    </div>
  );
}

export default Account 