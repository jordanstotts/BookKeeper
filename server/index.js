//------BASIC CONFIG------
const express = require('express')
require('./connection') //solved postman issue
const app = express()

app.set('port', 6001)
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
    const books = await BookList.find({})
    try {
        res.status(200).json({
            status : 'Success',
            data : {
                books
            }
        })
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
// app.put('update-notes/:id', async (req, res, next) => {
//     try {
//         const notesToUpdate = await BookList.findOneAndUpdate(
//             req.params.id,
//             req.body,
//             {
//                 new: true
//             }
//         )
//         if (notesToUpdate) {
//             res.json(notesToUpdate)
//         } else {
//             res.sendStatus(404)
//         }
//     } catch (err) {
//         next(err)
//     }
// })
app.put('/update-notes', async (req, res) => {
    const newNotes = req.body.newNotes
    const id = req.body.id

    try {
        await BookList.findById(id, (err, updatedNotes) => {
            updatedNotes.notes = newNotes
            updatedNotes.save()
            res.send('update')
        })
    } catch (err) {
        console.log(err)
    }
})

// app.put('/update-book/:id', async (req,res) => {
//     const updatedBook = await BookList.findByIdAndUpdate(req.params.id,req.body,{
//         new : true,
//         runValidators : true
//       })
//     try{
//         res.status(200).json({
//             status : 'Success',
//             data : {
//               updatedBook
//             }
//           })
//     }catch(err){
//         console.log(err)
//     }
// })

// app.put('update-book/:id', async (req, res) => {
//     const updatedBook = req.body.updatedBook
//     const id = req.body.id

//     try {
        
//         await BookList.findById(id, (error, bookToUpdate) => {
//             bookToUpdate.title = updatedBook
//             bookToUpdate.save()
//         })
//     } catch (err) {
//         console.log(err)
//     }

//     res.send('Book updated')
// })

// Delete a task
app.delete('/delete-book/:id', async(req, res, next) => {
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