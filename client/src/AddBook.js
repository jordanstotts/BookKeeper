import React, { useState } from "react";
import Axios from "axios";
import "./css/AddBook.css";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [notes, setNotes] = useState("");

  const addNewBook = () => {
    Axios.post("http://localhost:6001/add-book", {
      title,
      author,
      genre,
      notes,
    });
      window.location.href = "http://localhost:3000/unread-books"
    
  };
  return (
    <div className="container">
      <h1 className="homeHeader">Book Keeper</h1>
      <div className="homeLinks">
        <a href="/">Home</a>
        <a href="/unread-books">Unread Books</a>
        <a href="/add-book">Add Book</a>
      </div>
      <div className="addBookForm">
        <label htmlFor="">Title: </label>
        <input
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <br />
        <br />
        <label htmlFor="">Author: </label>
        <input
          type="text"
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
        <br />
        <br />
        <label htmlFor="">Genre: </label>
        <input
          type="text"
          onChange={(e) => {
            setGenre(e.target.value);
          }}
        />
        <br />
        <br />
        <label htmlFor="">Notes: </label>
        <textarea
          aria-label="With textarea"
          onChange={(e) => {
            setNotes(e.target.value);
          }}
        ></textarea>
        <br />
        <br />
      </div>
      <div className="addBookBtn">
        <button id="addBtn" onClick={addNewBook}>Add New Book</button>
      </div>
    </div>
  );
};

export default AddBook;
