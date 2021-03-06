const mongoose = require("mongoose");

const BookListSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
    required: false,
  },
});

const BookList = mongoose.model("BookList", BookListSchema);

module.exports = BookList;
