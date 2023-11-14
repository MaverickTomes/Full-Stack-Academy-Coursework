/* TODO - add your code to create a functional React component that displays all of the available 
books in the library's catalog. Fetch the book data from the provided API. 
 Users should be able to click on an individual book to navigate to the SingleBook component 
 and view its details. */
 import { useState, useEffect } from 'react'
 import Axios from 'axios'
 import { useNavigate } from 'react-router-dom';


 function AllBooks() {

  const [books, setBooks] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
   
    fetchBooks ()
   
  }, [])

  async function fetchBooks () {
    let API = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/"
    try {
      const { data: response } = await Axios.get(`${API}/books`)

      setBooks(response.books)
      console.log(response)

    } catch (err) {
      console.error(err.message)
    }
  }

  
  return <ul className='books-container'>
    {
      books.length ? 
        books.map(books => {
          return <li key={books.id}>
            <h3>#{books.id}</h3>
            <h3>{books.title}</h3>
            <img src={books.coverimage} />
            <button onClick={() => navigate(`/singlebook/${books.id}`)}>Show Details</button>
            </li>
        })
        :
        <h2>Loading ...</h2>
    }

  </ul>
}

 export default AllBooks

   //</ul>{/* <button onClick={() => navigate(`/details/${book.id}`)}>Show Details</button> */}
  