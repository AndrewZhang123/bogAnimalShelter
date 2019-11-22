const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const mongoose = require('mongoose')
const routes = require('./routes')
const path = require("path")

require('dotenv').config()

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var petsRouter = require('./routes/pets');

var app = express();

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
})
.then(_ => console.log('Successfully Connected to MongoDB'))
.catch(err => console.log('Error connecting to MongoDB', err))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/pets', petsRouter);

module.exports = app;
