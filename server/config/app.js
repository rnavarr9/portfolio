let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let passport = require('passport');

require('dotenv').config()

// database setup
let mongoose = require("mongoose")
let DB = require('./db')

// point mongoose to the DB URI
mongoose.connect(DB.URI)

let mongoDB = mongoose.connection;

mongoDB.on('error', console.error.bind(console, 'Connection Error'))
mongoDB.once('open', () => {
  console.log('Connected to MongoDB...')
});

let indexRouter = require('../routes/index');
let usersRouter = require('../routes/users');
let userRouter = require('../routes/user');

let app = express();

// view engine setup

// It joins views into our search path. Any template put in views subfolder will be available for referencing inside your application
app.set('views', path.join(__dirname, '../views'));
// Configures out view engine to ejs
app.set('view engine', 'ejs');

// registration of passport middleware
// app.use(passport.initialize());
// app.use(passport.session());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../node_modules'))); // will be needed for font awesome

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/user-list', userRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', {title: "Error"});
});

module.exports = app;