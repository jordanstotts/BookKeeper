import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import './App.css';
function App() {

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [genre, setGenre] = useState('')
  
  const addNewBook = () => {
    Axios.post('http://localhost:6001/add-book',{title, author, genre})
  }

  
  const [unreadBooks, setUnreadBooks] = useState([])

  useEffect(() => {
    Axios.get('http://localhost:6001/book-list').then(res => {
      setUnreadBooks(res.data.data.books)
    })
  },[])

  return (
    <div>
    <div className="container">

        <label htmlFor="">Title: </label>
        <input type="text" onChange={(e) => {setTitle(e.target.value)}}/><br/><br/>
        <label htmlFor="">Author: </label>
        <input type="text" onChange={(e) => {setAuthor(e.target.value)}}/><br/><br/>
        <label htmlFor="">Genre: </label>
        <input type="text" onChange={(e) => {setGenre(e.target.value)}}/><br/><br/>

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
        </div>
      })
    }

  </div>
  </div>
  );
}

export default App;