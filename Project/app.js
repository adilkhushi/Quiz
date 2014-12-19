var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//For Database
var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;
MongoClient.connect('mongodb://127.0.0.1:27017/quiz', function(err, db) {
    if (err) {
        throw err;
    }
    else {
        console.log("connection successful");
        app.db = db;
    }
   

});

// Page paths
var routes = require('./routes/index');
var users = require('./routes/users');
var contact=require('./routes/contact');
var about=require('./routes/about');
var login=require('./routes/login');
var signup=require('./routes/signup');
var test=require('./routes/test');
var quiz=require('./routes/quiz');
var quizType=require('./routes/quizType');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/contact',contact);
app.use('/about',about);
app.use('/login',login);
app.use('/signup',signup);
app.use('/test',test);
app.use('/quiz',quiz);
app.use('/quizType',quizType);
//app.use('/quizType/quiz',quiz);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
