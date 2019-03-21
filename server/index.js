const express = require ('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const users = require('./routes/users')
const cors = require('cors')

//setup environment 
dotenv.config()


// mongo db connect
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true }) 

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(cors())
app.use('/api/users', users)

// run app
const PORT = process.env.PORT || 5001
app.listen(process.env.PORT, () => console.log(`Server is running on port ${PORT}`))