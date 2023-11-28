import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import AllUsers from './components/AllUsers'






function App() {
  //const [ token, setToken ] = useState(null)


  return (
    <>
  
     <h1>JUICEBOX</h1>
    
     <div className='nav-link'>
        <Link to='/'>Home</Link>
        <Link to='/login/'>Login</Link>
        

      </div>


    <Routes>
      <Route path='/' element={<AllUsers/>}/>
      <Route path='/login/' element={<Login/>}/>
      
      

    </Routes>




    </>
  )
}

export default App



// function App() {
//   const [ token, setToken ] = useState(null)


//   return (
//     <>
  
//      <h1><img id='logo-image' src={bookLogo}/>Book Buddy</h1>
//      <h6>"Find a book, Check it out fast"</h6>
//      <div className='nav-link'>
//         <Link to='/'>Home</Link>
//         {!token && <Link to='/login/'>Login</Link>}
//         {!token && <Link to='/register/'>Register</Link>}
//         {token && <Link to='/myAccount'>My Account</Link>}

//       </div>


//     <Routes>
//       <Route path='/' element={<AllBooks/>}/>
//       <Route path='/login/' element={<Login token={token} setToken={setToken}/>}/>
//       <Route path='/register/' element={<Register token={token} setToken={setToken}/>}/>
//       <Route path='/myAccount/' element={<Account token={token}/>}/>
    

//     </Routes>