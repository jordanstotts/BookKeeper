import React, { useState } from "react";
import Axios from "axios";


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
  };
  return (
    <div className="container">
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
    </div>
  );
};

export default AddBook;
