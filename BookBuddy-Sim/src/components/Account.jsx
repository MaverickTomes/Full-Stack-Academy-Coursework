
import { useState, useEffect } from "react";

function Account ({ token }){

  const [ name, setName ] = useState("")
  const [ lastname, setLastName ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ books, setBooks ] = useState([])
  const [ message, setMessage ] = useState("")


  useEffect (() => {
    fetchUser()
  }, [])

  async function fetchUser() {
     try{
         let API = 'https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api'
         const response = await fetch(`${API}/users/me`, {
           headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
           },
        })

         const result = await response.json()
         setName(result.firstname)
         setLastName(result.lastname)
         setEmail(result.email)
         setBooks(result.books)

        } catch(error) {
          console.error(error.message)
        }
        
    }

    
    async function returnBook( book ) {
      let API = 'https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations'
      const response = await fetch(`${API}/${book}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
         },
      });
      const result = await response.json();
     // console.log(result);
      setMessage(result);
      fetchUser()
      


    }

return (
  <div className="account">
    <h1>My Account Information</h1>
    <h2>{name} {lastname}</h2>
    <h3>{email}</h3>
        <div>
          <h2>My Reserved Books:</h2>
          {books.length <= 0 && <p>**NO BOOKS RESERVED**</p>}
            {(message) ? (<p>Returned book successfully!</p>) : (<p></p>)}
          <ul>
              {books.map((book) => 
              <li key={book.id}>
                <p>Title: {book.title}</p>
                <p>Author: {book.author}</p>
                <button onClick={() => returnBook(book.id)}>Return Book</button>
              </li>
              )}
          </ul>
        </div>
  </div>
  )
}
export default Account


















// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Axios from "axios";



// function Account({ token }) { 

//   const navigate = useNavigate()

//   const [successMessage, setSuccessMessage] = useState(null);
//   const [error, setError] = useState(null);

//   const [ user, setUser ] = useState("")
//   const [ reservedBook, setReservedBooks ] = useState([]);

 
// async function fetchAccount() { 
//     try {
//       const response = await fetch(
//         "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me/",
//         {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       const result = await response.json();
//       setUser(result);
//     } catch (error) {
//       setError(error.message);
//     }
//   }
//         setName(userData.firstname)
//         setLastName(userData.lastname)
//         setEmail(userData.email)

//         const reserveResponse = await Axios.get(${API}/reservations/, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           }
//         })
//         if(Array.isArray(reserveResponse.data.reservation)) {
//         setReservedBooks(reserveResponse.data.reservation)
//         } else {
//           console.error('Invalid data', reserveResponse.data)
//         }

//   return (
//     <div>
//             <h1>My Account</h1>
//             {successMessage && <p>{successMessage}</p>}
//             {error && <p>{error}</p>}
//             <h2>{user.firstname}{user.lastname}</h2>
//             <h2>My Checked Out Books:</h2>
        
          
//               {user.books.map (books => {

//             return (   
//           <div> 
              
//               <li key={books.id}></li>
//               <h3>{books.title}</h3>
//               <img src={books.coverimage} />
//           </div>
//             )
//           })}
          

//             <button onClick={fetchAccount}>Return Book</button>
//             <button onClick={() => navigate("/")}>Signout</button>
          
//     </div>
//   );
// }

// export default Account 