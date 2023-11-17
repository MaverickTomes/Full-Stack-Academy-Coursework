import { useState } from "react";
import { useNavigate } from "react-router-dom";



function Account({ token }) { 

  const navigate = useNavigate()

  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  const [ user, setUser ] = useState("")

 
async function fetchAccount() { 
    try {
      const response = await fetch(
        "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me/",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
      setUser(result);
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
            <h2>My Checked Out Books:</h2>
        
          
              {user.books.map (books => {

            return (   
          <div>       
              <li key={books.id}></li>
              <h3>{books.title}</h3>
              <img src={books.coverimage} />
          </div>
            )
          })}
          

            <button onClick={fetchAccount}>Return Book</button>
            <button onClick={() => navigate("/")}>Signout</button>
          
    </div>
  );
}

export default Account 