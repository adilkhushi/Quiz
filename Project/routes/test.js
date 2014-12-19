/**
 * Created by KHUSHI on 12/7/2014.
 */
var express = require('express');
var router = express.Router();
var util = require('util');
var mongodb = require('mongodb');
var client = mongodb.MongoClient;


/* GET home page. */
router.get('/', function(req, res) {
    res.render('test', { title: 'Login' });
});

router.post('/allesgute',function(req,res){
    console.log('Category: ' + req.body.uname);
    //console.log('Type: ' + req.query['email']);

//
//    var Db = mongodb.Db;
//    var Server = mongodb.Server;
//    var db = new Db('quiz', new Server('localhost', '27017'));
//    db.open(function(err, db) {
//        console.log(err);
//        db.authenticate('admin', 'admin', function(err, result) {
//            var document = {name: req.query.name, email: req.query.email, phone : req.query.phone,password : req.query.password, repassword :req.query.repassword,gender : req.query.gender };
//            db.collection('users').insert(document, function(err, db){
//                if (err) throw err;
//                console.log('Data inserted');
//            });
//        });
//    });

    res.render('index');

});




module.exports = router;
