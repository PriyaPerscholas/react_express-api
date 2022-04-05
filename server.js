const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const db = mongoose.connection
//Environment variables
const app = express()
const mongoURI = process.env.MONGO_URI
const PORT = process.env.PORT || 3001
const cors = require('cors')

// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true },
       () => console.log('MongoDB connection established:', mongoURI)
)

// Error / Disconnection
db.on('error', err => console.log(err.message + ' is Mongod not running?'))
db.on('disconnected', () => console.log('mongo disconnected'))

// Middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json()); //use .json(), not .urlencoded()
app.use(express.static('public'))
app.use(cors())



//route
const todosController = require('./controllers/todos.js');
app.use('/todos', todosController);


app.listen(PORT, () => {
       console.log('Running on port', PORT)
})