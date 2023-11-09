import { useState } from 'react'
import SignUpForm from './Components/SignupForm'
import Authenticate from './Components/Authenticate'
import './App.css'


function App() {

  const [token, setToken] = useState (null);

  return (
    <>
    <h1>Welcome To Our Signup Page!</h1>
    <br />
    <br />
     <SignUpForm token={token} setToken={setToken} />
     <Authenticate token={token} setToken={setToken} />
     console.log
    </>
  )
}

export default App
