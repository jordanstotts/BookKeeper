// import React, { useState, useEffect } from "react";
// import Axios from "axios";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AddBook from "./AddBook";
import Home from "./Home";
import UnreadBooks from "./UnreadBooks";

function App() {
  // adding a book
  // const [title, setTitle] = useState("");
  // const [author, setAuthor] = useState("");
  // const [genre, setGenre] = useState("");
  // const [notes, setNotes] = useState("");

  // const addNewBook = () => {
  //   Axios.post("http://localhost:6001/add-book", {
  //     title,
  //     author,
  //     genre,
  //     notes,
  //   });
  // };

  // getting / displaying books
  // const [unreadBooks, setUnreadBooks] = useState([]);

  // useEffect(() => {
  //   Axios.get("http://localhost:6001/book-list").then((res) => {
  //     setUnreadBooks(res.data.data.books);
  //   });
  // }, []);

  // updating books
  // const [newNotes, setNewNotes] = useState("");

  // const updateNotes = (id) => {
  //   Axios.put("http://localhost:6001/update-notes", {
  //     id: id,
  //     newNotes: newNotes,
  //   });
  // };

  // delete books
  // const deleteBook = (id) => {
  //   Axios.delete(`http://localhost:6001/delete-book/${id}`);
  // };

  return (
    <div>
      <div>
        <a href="/">Home</a>
        <a href="/unread-books">Unread Books</a>
        <a href="/add-book">Add Book</a>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/unread-books" element={<UnreadBooks />} />
        <Route path="/add-book" element={<AddBook />} />
      </Routes>

      {/* <div className="container">
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

        <button onClick={addNewBook}>Add New Book</button>
      </div> */}

      {/* <div className="container">
        <h1>Unread Books</h1>
        {unreadBooks.map((val, key) => {
          return (
            <div key={key} className="book">
              <h1>{val.title}</h1>
              <h1>{val.author}</h1>
              <h1>{val.genre}</h1>
              <h1>{val.notes}</h1>
              <input
                type="text"
                placeholder="Update Notes..."
                onChange={(e) => {
                  setNewNotes(e.target.value);
                }}
              />
              <button
                className="update-btn"
                onClick={() => {
                  updateNotes(val._id);
                }}
              >
                Update
              </button>
              <button
                className="delete-btn"
                onClick={() => {
                  deleteBook(val._id);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div> */}
    </div>
  );
}

export default App;
