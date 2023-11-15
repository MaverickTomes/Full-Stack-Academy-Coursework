/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */

import { Link, Route, Routes } from 'react-router-dom'
import AllBooks from './AllBooks'
import SingleBook from './SingleBook'
import Login from './components/Login'




function Navigation() {
  

  return (
  <>  
  
    <div className='nav-link'>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
    </div>


        <Routes>
            <Route path='/' element={<AllBooks/>}/>
            <Route path='/singlebook/:bookId' element={<SingleBook/>}/>
            <Route path='/login/' element={<Login/>}/>
        </Routes>
  

  </>
  );
}
export default Navigation