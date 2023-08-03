const mongoose = require('mongoose')



const govtSchema = mongoose.Schema({
    // title: {
    //     type: String,
    //     trim: true,
    // },
    // title2: {
    //     type: String,
    //     trim: true,
    // },
    // dep: {
    //     type: String,
    //     trim: true,
    // },
    // desc: {
    //     type: String,
    // },
    // publised: {
    //     type: String,
    // },
    // deadline: {
    //     type: String,
    // },
    // source: [
    //    { url: String, name: String }
    // ],
    // vacancy: {
    //     type: Number,
    // },
    // applyLink: {
    //     type: String,
    // },
    // admitLink: {
    //     type: String,
    // },
    // imgdesc: {
    //     type: String,
    // },
    // image: [{
    //     data: Buffer,
    //     contentType: String,
    // }],
    // applydesc: [],
    // admitdesc: [],
}, {
    timestamps: true,
})



const Govt = mongoose.model('govt', govtSchema)

module.exports = Govt