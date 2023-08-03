const mongoose = require('mongoose')
require('dotenv').config()





const connectDB = () => {
    mongoose.connect(process.env.DB_URI, (err) => {
        err ? console.log(err) : console.log('Database Connect Succesful')
    })
}



module.exports = connectDB