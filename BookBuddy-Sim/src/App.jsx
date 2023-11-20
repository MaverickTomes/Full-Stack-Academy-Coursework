import { useState } from 'react'
import bookLogo from './assets/books.png'
import { Link, Route, Routes } from 'react-router-dom'
import AllBooks from './components/AllBooks'
import SingleBook from './components/SingleBook'
import Login from './components/Login'
import Register from './components/Register'
import Account from './components/Account'






function App() {
  const [ token, setToken ] = useState(null)


  return (
    <>
  
     <h1><img id='logo-image' src={bookLogo}/>Book Buddy</h1>
     <h6>"Find a book, Check it out fast"</h6>
     <div className='nav-link'>
        <Link to='/'>Home</Link>
        {!token && <Link to='/login/'>Login</Link>}
        {!token && <Link to='/register/'>Register</Link>}
        {token && <Link to='/myAccount'>My Account</Link>}

      </div>


    <Routes>
      <Route path='/' element={<AllBooks/>}/>
      <Route path='/singlebook/:bookId' element={<SingleBook token={token}/>}/>
      <Route path='/login/' element={<Login token={token} setToken={setToken}/>}/>
      <Route path='/register/' element={<Register token={token} setToken={setToken}/>}/>
      <Route path='/myAccount/' element={<Account token={token}/>}/>
    

    </Routes>




    </>
  )
}

export default App


/*
 

      <p>Complete the React components needed to allow users to browse a library catalog, check out books, review their account, and return books that they've finished reading.</p>

      <p>You may need to use the `token` in this top-level component in other components that need to know if a user has logged in or not.</p>

      <p>Don't forget to set up React Router to navigate between the different views of your single page application!</p>

 <nav>
        <Link to='/'>Home</Link>
        <Link to='/add'>Add Puppy</Link>
      </nav>

    <Routes>
      <Route path='/' element={<AllPuppies/>}/>
      <Route path='/add' element={<AddPuppyForm/>}/>
      <Route path='/details/:id' element={<SinglePuppy/>}/>
    </Routes>



*/