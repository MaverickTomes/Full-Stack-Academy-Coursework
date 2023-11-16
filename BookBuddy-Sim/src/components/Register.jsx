import { useState } from "react";

export default function Register({ setToken }) {
 
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register/", 
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
          
            firstname: firstname,
            lastname: lastname,
            email: username,
            password: password,
          }),
        }
      );
      const result = await response.json();
      console.log("Signup Result: ", result);
      setToken(result.token);
      setSuccessMessage(result.message);
      setUsername("");
      setPassword("");
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div>
      <h2>Signup</h2>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>

        <label>
          Firstname:{" "}
          
          <input
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </label>
        <label>
          Lastname:{" "}
        
          <input
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </label>
        <label>
          Username:{" "}
        
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label> 
        <label>
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}




{/* </form>
// import { useState } from "react"

// function Register() { //add your prop in here..
//   const [firstname, setFirstname] = useState("")
//   const [lastname, setLastname] = useState("")
//   const [username, setUsername] = useState("")
//   const [password, setPassword] = useState("")


//   async function regRequest() {
//     let API = await fetch ("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register/", {
//     method: "POST",
//     headers: {
//       "Content-Type" : "application/jason",
//     },
//     body: JSON.stringify({
//       firstname: firstname,
//       lastname: lastname,
//       username: username,
//       password: password,
//     })
//   })
// //call setToken 
// }

//   return(
//     <>
//     <h5>Please Register Below:</h5>
//     <form id="register">
        
//         <label>First Name:</label>
//         <input type="text" id="firstname" required onChange={(evt) => setFirstname(evt.target.value)} />
//         <label>Last Name</label>
//         <input type="text" id="lastname" onChange={(evt) => setLastname(evt.target.value)}/>
//         <label>Username:</label>
//         <input type="text" id="username" required onChange={(evt) => setUsername(evt.target.value)}/>
//         <label>Password:</label>
//         <input type="text " id="password" required onChange={(evt) => setPassword(evt.target.value)}/>
//         <button onSubmit={() => regRequest()}>Register</button>

//     </form>
    
    
//     </>
//   )
// }
// export default Register





//"https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register/" */}