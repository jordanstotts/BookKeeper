const mongoose = require('mongoose')

const BookListSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    author : {
        type : String,
        required : true
    },
    genre : {
        type: String, 
        required: true
    }
})

const BookList = mongoose.model('BookList',BookListSchema)

module.exports = BookList