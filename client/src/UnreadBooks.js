import React, { useState, useEffect } from "react";
import Axios from "axios";
import { text } from "express";

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

//   const btn = document.getElementById('btn');

//   btn.addEventListener('click', function onClick(event) {
//     //  Change text color globally
//     // document.body.style.color = 'darkgreen';
  
//     //  Change text color for clicked element only
//     event.target.style.color = 'salmon';
//   });

// const finishedBooks = () => {
//     // getting / displaying books
//     const [, setUnreadBooks] = useState([]);
  
//     useEffect(() => {
//       Axios.get("http://localhost:6001/book-list").then((res) => {
//         setUnreadBooks(res.data.data.books);
//       });
//     }, []);
// const [isFinished, setIsFinished] = useState(false)
// const finishedBook = () => {
//     // completedBooks = []
//     setIsFinished = true
//     // if (isFinished === true) {
//     //     completedBooks.push()
//     // }
// }
//   const btn = document.getElementById('btn');

//   btn.addEventListener('click', function onClick(event) {
//     //  Change text color globally
//     // document.body.style.color = 'darkgreen';
  
//     //  Change text color for clicked element only
//     event.target.style.color = 'salmon';
//   });



  return (
    <div className="container">
      <h1>Unread Books</h1>
      {unreadBooks.map((val, key) => {
        return (
            // <div style={{backgroundColor: 'green'}}>
          <div key={key} className="book">
            <h3>
              <>Title: </>
              {val.title}
            </h3>
            <p>Author: {val.author}</p>
            <p>Genre: {val.genre}</p>
            <p>Notes: {val.notes}</p>
            <input
              type="text"
              placeholder="Update Notes..."
              onChange={(e) => {
                setNewNotes(e.target.value);
              }}
            />
            {/* </div> */}
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
            <button
            id="btn"
              className="finished-btn"
            
            >
              Finished
              {/* Add emoji green check here */}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default UnreadBooks;
