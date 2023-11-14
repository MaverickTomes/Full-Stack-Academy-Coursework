/* TODO - add your code to create a functional React component that renders 
details for a single book. Fetch the book data from the provided API. 
You may consider conditionally rendering a 'Checkout' button for logged in users. */

import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function SingleBook() {
  
  const [ book, setBook ] = useState({})

  const { bookId } = useParams()


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


// console.log(book)
  
  
  return <div className='book-details'>
    { 
      book.id ?
        <div className='single-book'>
          <h2>#{book.id}</h2>
          <h3>{book.title}</h3>
          <h3>{book.author}</h3>
          <h4>{book.description}</h4>
          <img src={book.coverimage}/>
          <h3>{book.available}</h3>
          <button>Available</button>
        </div>
      :
        <h1>No book was found with id: "{bookId}".  Try again.</h1>

    }
  </div>



}
export default SingleBook