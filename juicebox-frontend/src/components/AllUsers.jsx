
 import { useState, useEffect } from 'react'
 import Axios from 'axios'
 import { useNavigate } from 'react-router-dom';


 function AllUsers() {

  const [users, setUsers] = useState([])

 // const navigate = useNavigate()

  useEffect(() => {
   
    fetchUsers ()
   
  }, [])

  async function fetchUsers () {
    let API = "http://localhost:3000/api/"
    try {
      const { data: response } = await Axios.get(`${API}/users`)

      setUsers(response.user)
      console.log(response)

    } catch (err) {
      console.error(err.message)
    }
  }

  
  return (
  <>
      <h4>Welcome! Please Register To Check Out A Book.</h4>

  <ul className='user-container'> 
    {
      // users.length ? 
        users.map(users => {
          return <li key={users.id}>
            <h3>#{users.id}</h3>
            <h3>{users.name}</h3>
            
            </li>
        })
        // :
        // <h2>Loading ...</h2>
    }

  </ul>
  </>)
}

 export default AllUsers

   //</ul>{/* <button onClick={() => navigate(`/details/${book.id}`)}>Show Details</button> */}
  