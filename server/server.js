const express = require('express');
const bodyParse = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const config = require('./config/config').get(process.env.NODE_ENV);
const app = express();

// Setting mongoose
mongoose.Promise = global.Promise;
mongoose.connect(config.DATEBASE);

// Setting Models
const { User } = require('./models/user');
const { Book } = require('./models/book');

// Setting Middlewares
app.use(bodyParse.json());
app.use(cookieParser());

/*** Setting Requests ***/
// GET //
app.get('/api/getBook', (req, res) => {
    let id = req.query.id;

    Book.findById(id, (err, doc) => {
        if (err) return res.status(400).send(err);
        res.send(doc);
    })
})

app.get('/api/books', (req, res) => {
    let skip = parseInt(req.query.skip);
    let limit = parseInt(req.query.limit);
    let order = req.query.order; //asc/desc

    Book.find().skip(skip).sort({ _id: order }).limit(limit).exec((err, doc) => {
        if (err) return res.status(400).send(err);
        res.send(doc);
    })
})

// POST //
app.post('/api/book', (req, res) => {
    const book = new Book(req.body)

    book.save((err, doc) => {
        if (err) return res.status(400).send(err);
        res.status(200).json({
            success: true,
            bookId: doc._id
        })
    })
})

// UPDATE //
app.post('/api/book_update', (req, res) => {
    Book.findByIdAndUpdate(req.body._id,req.body,{new:true},(err,doc)=>{
        if (err) return res.status(400).send(err);
        res.json({
            success: true,
            doc
        })
    })
})

// DELETE //
app.delete('/api/delete_book',(req,res)=>{
    const id = req.query.id;

    Book.findByIdAndRemove(id,(err,doc)=>{
        if (err) return res.status(400).send(err);
        res.json(true)
    })
})

app.listen(config.PORT, () => {
    console.log(`Server running on port: ${config.PORT}`)
})