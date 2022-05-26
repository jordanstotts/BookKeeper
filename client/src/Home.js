import React from "react";
import "./css/Home.css";
import stackOfBooks from "./books.png";

const Home = () => {
  return (
    <div>
      <h1 className="homeHeader">Book Keeper</h1>
      <div className="homeLinks">
        <a href="/">Home</a>
        <a href="/unread-books">Unread Books</a>
        <a href="/add-book">Add Book</a>
      </div>
      <div className="bookDiv">
        <img className="bookPic1" src={stackOfBooks} alt="books" />
      </div>
    </div>
  );
};

export default Home;
