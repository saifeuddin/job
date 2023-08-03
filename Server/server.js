const express = require('express')
const path = require('path')
const app = express()

require('dotenv').config()
const connectDB = require('./database/config/connection')

const cors = require('cors')
const cookieParser = require('cookie-parser')








// Middleweres
app.use(cors())
app.use(express.raw())
app.use(express.text())
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true}))
app.use('/images', express.static(path.join(__dirname, 'public')))




//Routers
const userRegistration = require('./router/user/userRegistration')
app.use('/userRegistration', userRegistration)

const userLogin = require('./router/user/userLogin')
app.use('/userLogin', userLogin)

const bank = require('./router/bank/bank')
app.use('/category/bank', bank)

const govt = require('./router/govt/govt')
app.use('/category/govt', govt)








// Run Server & Database
const Port = process.env.PORT

const startServer = async () => {
    try {
        await app.listen(Port, console.log('Server is Running ' + Port))
        await connectDB()

    } catch (err) {
        console.log(err)
    }
}

startServer()