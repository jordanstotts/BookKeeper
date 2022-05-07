const express = require('express')
const router = express.Router()
const BookList = require('./BookList')

// Get request for all tasks
router.get('/', async (req, res, next) => {
    try {
        const books = await BookList.find({})
        res.json(books)
    } catch (err) {
        next(err)
    }
})

// Get request for task by ID
router.get('/:id', async (req, res, next) => {
    try {
        const books = await BookList.find({})
        res.json(books)
    } catch (err) {
        next(err)
    }
})

// Create new task
router.post('/', async (req, res, next) => {
    try {
        const newBook = await BookList.create(req.body)
        res.status(201).json(newBook)
    } catch (err) {
        next(err)
    }
})

// Edit a task
router.put('/:id', async (req, res, next) => {
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
router.delete('/:id', async(req, res, next) => {
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

module.exports = router