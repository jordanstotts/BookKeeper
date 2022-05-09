import React, { useState } from 'react';
import Axios from 'axios'
import './App.css';
function App() {

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [genre, setGenre] = useState('')
  
  const addNewBook = () => {
    Axios.post('http://localhost:6001/add-book',{title, author, genre})
  }

  
  return (
    <div className="container">

        <label htmlFor="">Title: </label>
        <input type="text" onChange={(e) => {setTitle(e.target.value)}}/><br/><br/>
        <label htmlFor="">Author: </label>
        <input type="text" onChange={(e) => {setAuthor(e.target.value)}}/><br/><br/>
        <label htmlFor="">Genre: </label>
        <input type="text" onChange={(e) => {setGenre(e.target.value)}}/><br/><br/>

        <button onClick={addNewBook}>Add New Book</button>

    </div> 
  );
}

export default App;