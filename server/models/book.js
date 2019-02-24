const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    name: {
        type: String,
        requred: true
    },
    author: {
        type: String,
        requred: true
    },
    review: {
        type: String,
        default: 'n/a'
    },
    pages: {
        type: String,
        requred: true
    },
    ratting: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    price: {
        type: String,
        default: 'n/a'
    },
    ownerId: {
        type: String,
        requred: true
    }
}, { timestamps: true })
// timestamps adds created and updated at fiels

//Connect mongoose Schema
const Book = mongoose.model('Book', bookSchema);

//Export model
module.exports = { Book }


