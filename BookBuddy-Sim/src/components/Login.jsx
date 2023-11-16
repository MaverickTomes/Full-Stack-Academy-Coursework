import { useState } from "react";

export default function Login({ setToken }) {
 
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login/", 
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
           
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
      <h2>Login</h2>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>

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
