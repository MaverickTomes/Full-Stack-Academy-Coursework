import { useNavigate } from "react-router-dom"

function Register() {

  const navigate = useNavigate()

  return(
    <>
    <h5>Please Register Below:</h5>
    <form id="register">
      <label>First Name:</label>
      <input type="text" id="firstname" />
      <label>Last Name</label>
      <input type="text" id="lastname"/>
      <label>Username:</label>
      <input type="text" id="username" />
      <label>Password:</label>
      <input type="text " id="password" />
      <button onClick={() => navigate(`/`)}>Register</button>






    </form>
    
    
    </>
  )
}
export default Register
