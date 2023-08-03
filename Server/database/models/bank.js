const mongoose = require('mongoose')



const bankSchema = mongoose.Schema({
    title: {
        type: String,
        trim: true,
    },
    desc: {
        type: String,
        trim: true,
    },
}, {
    timestamps: true,
})



const Bank = mongoose.model('Bank', bankSchema)
module.exports = Bank