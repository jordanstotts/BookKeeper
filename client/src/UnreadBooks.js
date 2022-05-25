import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./css/UnreadBooks.css";

const UnreadBooks = () => {
  // getting / displaying books
  const [unreadBooks, setUnreadBooks] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:6001/book-list").then((res) => {
      setUnreadBooks(res.data.data.books);
    });
  }, []);

  // updating books
  const [newNotes, setNewNotes] = useState("");

  const updateNotes = (id) => {
    Axios.put("http://localhost:6001/update-notes", {
      id: id,
      newNotes: newNotes,
    });
  };

  // delete books
  const deleteBook = (id) => {
    Axios.delete(`http://localhost:6001/delete-book/${id}`);
  };

  const finishedBook = () => {
    let greenCheck = document.getElementById("finished");
    greenCheck.innerHTML = "☑";
  };

  return (
    <div className="container">
      <h1 className="homeHeader">Book Keeper</h1>
      <div className="homeLinks">
        <a href="/">Home</a>
        <a href="/unread-books">Unread Books</a>
        <a href="/add-book">Add Book</a>
      </div>
      <h1 className="unreadHeader">Unread Books</h1>
      <div className="unreadBooksList">
        {unreadBooks.map((val, key) => {
          return (
            <div key={key} className="book">
              <button
                className="delete-btn"
                onClick={() => {
                  deleteBook(val._id);
                }}
              >
                X
              </button>

              <h1 className="title">{val.title}</h1>
              <h4 className="author">{val.author}</h4>
              <h5 className="genre">{val.genre}</h5>
              <p className="notes">{val.notes}</p>

              <div className="notesText">
                
              <textarea
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
              </div>
              <br></br>
              <div className="finishedBtnDiv">
                <button
                  className="finished-btn"
                  onClick={() => {
                    finishedBook();
                  }}
                >
                  ✅
                </button>
              </div>
            </div>
          );
        })}
        <div id="finished"></div>
      </div>
    </div>
  );
};

export default UnreadBooks;
