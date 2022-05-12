import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import './App.css';
function App() {
// adding a book
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [genre, setGenre] = useState('')
  const [notes, setNotes] = useState('')
  
  const addNewBook = () => {
    Axios.post('http://localhost:6001/add-book',{title, author, genre, notes})
  }

// getting / displaying books 
  const [unreadBooks, setUnreadBooks] = useState([])

  useEffect(() => {
    Axios.get('http://localhost:6001/book-list').then(res => {
      setUnreadBooks(res.data.data.books)
    })
  },[])


// updating books
const [newBook, setNewBook] = useState('')
 
const updateBook = async (id) =>{
  await Axios.put(`http://localhost:6001/update-book/${id}`,{id, newBook})
}


// delete books
const deleteBook = (id) => {
  Axios.delete(`http://localhost:6001/delete-book/${id}`)
}

  return (
    <div>
    <div className="container">

        <label htmlFor="">Title: </label>
        <input type="text" onChange={(e) => {setTitle(e.target.value)}}/><br/><br/>
        <label htmlFor="">Author: </label>
        <input type="text" onChange={(e) => {setAuthor(e.target.value)}}/><br/><br/>
        <label htmlFor="">Genre: </label>
        <input type="text" onChange={(e) => {setGenre(e.target.value)}}/><br/><br/>
        <label htmlFor="">Notes: </label>
        <textarea class="form-control" aria-label="With textarea" onChange={(e) => {setNotes(e.target.value)}}></textarea><br/><br/>

        <button onClick={addNewBook}>Add New Book</button>

    </div> 
    <div className="container">

    <h1>Unread Books</h1>
    {
      unreadBooks.map((val,key) => {
        return <div key={key} className="book" >
          <h1>{val.title}</h1>
          <h1>{val.author}</h1>
          <h1>{val.genre}</h1>
          <h1>{val.notes}</h1>
          <input type="text" placeholder='update Book...' onChange={(e) => {
              setNewBook(e.target.value)
            }}/>
            <button className="update-btn"  onClick={() => {updateBook(val._id)}}>Update</button>
            <button  className='delete-btn'onClick={() =>{deleteBook(val._id)}}>Delete</button>
        </div>
      })
    }

  </div>
  </div>
  );
}

export default App;