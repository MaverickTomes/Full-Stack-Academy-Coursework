/* TODO - add your code to create a functional React component that renders a login form */
import { useNavigate } from "react-router-dom"

function Login() {

  const navigate = useNavigate()

  return(
    <>
    <h5>Please Login:</h5>
    <form id="login">
      <label>Username:</label>
      <input type="text" id="username" required />
      <label>Password:</label>
      <input type="text " id="password" required />
      <button onClick={() => navigate(`/`)}>Login</button>






    </form>
    
    
    </>
  )
}
export default Login