import React, { useState, useEffect } from 'react'
import Axios from 'axios';

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

  return (
          <div className="container">
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
      </div>
  )
}

export default UnreadBooks