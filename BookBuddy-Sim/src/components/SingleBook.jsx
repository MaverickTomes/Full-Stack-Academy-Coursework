/* TODO - add your code to create a functional React component that renders 
details for a single book. Fetch the book data from the provided API. 
You may consider conditionally rendering a 'Checkout' button for logged in users. */

import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

function SingleBook({ token }) {
  
  const [ book, setBook ] = useState({})
  const { bookId } = useParams()

  const navigate = useNavigate()


  useEffect(() => {
  
    fetchSingleBook()

  }, [])


  async function fetchSingleBook() {
    let API ='https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/'

  

    try {
      const { data } = await axios.get(`${API}/books/${bookId}`)

      setBook(data.book)

    } catch(err) {
      console.error(err.message)
    }
  }

  async function reserveBook() { 
    try {
      const response = await fetch(
        `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${bookId}`, 
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
          body: JSON.stringify({
            available: false, })
          
        }
      );
      const result = await response.json();
      //console.log(result)

      fetchSingleBook()

    }  catch (error) {
      console.error(error.message);
    }
  }
  
  
  return <div className='book-details'>
    { 
    
      (book.id) ? (
        <div className='single-book'>
          <h2>#{book.id}</h2>
          <h3>{book.title}</h3>
          <h3>{book.author}</h3>
          {token && <button onClick={() => {reserveBook()}}>Reserve Now</button>}
          <h4>{book.description}</h4>
          <img src={book.coverimage}/>
          <h3>{book.available}</h3>
          <h3>{book.available}</h3>
          
          
        </div> )
      :
        (<h1>No book was found with id: "{bookId}".  Try again.</h1>)

    }
  </div>



}
export default SingleBook