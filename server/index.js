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
app.use('/BookList', BookListController)


app.use((err, req, res, next) => {
    const statusCode = res.statusCode || 500
    const message = err.message || 'Internal Server Error'
    res.status(statusCode).send(message)
})


//--------START SERVER--------
app.listen(app.get('port'), () => {
    console.log(`✅ PORT: ${app.get('port')} 🌟`)
})