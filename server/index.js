//------BASIC CONFIG------
const express = require('express')
require('./connection') //solved postman issue
const app = express()

app.set('port', 6000)
const cors = require('cors')
app.use(cors())

//---------MIDDLEWARE------
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


//--------ROUTES-----------
//Redirect
app.get('/', (req, res) => {
	res.redirect('/task')
})

//Controllers
const BookListController = require('./BookListController')
app.use('./BookList', BookListController)

// Get request for all tasks
app.get('/book-list', async (req, res, next) => {
    try {
        const books = await BookList.find({})
        res.json(books)
    } catch (err) {
        next(err)
    }
})

// Create new task
const BookList = require('./BookList')
app.post('/add-book', async (req, res, next) => {
    try {
        const newBook = await BookList.create(req.body)
        res.status(201).json(newBook)
    } catch (err) {
        next(err)
    }
})

// Edit a task
app.put('/:id', async (req, res, next) => {
    try {
        const bookToUpdate = await BookList.findOneAndUpdate(
            req.params.id,
            req.body,
            {
                new: true
            }
        )
        if (bookToUpdate) {
            res.json(bookToUpdate)
        } else {
            res.sendStatus(404)
        }
    } catch (err) {
        next(err)
    }
})

// Delete a task
app.delete('/:id', async(req, res, next) => {
    try {
        const bookToDelete = await BookList.findByIdAndDelete(req.params.id)
        console.log(bookToDelete)
        if (bookToDelete) {
            res.sendStatus(204)
        } else {
            res.sendStatus(404)
        }
    } catch (err) {
        next(err)
    }
})

app.use((err, req, res, next) => {
    const statusCode = res.statusCode || 500
    const message = err.message || 'Internal Server Error'
    res.status(statusCode).send(message)
})


//--------START SERVER--------
app.listen(app.get('port'), () => {
    console.log(`✅ PORT: ${app.get('port')} 🌟`)
})