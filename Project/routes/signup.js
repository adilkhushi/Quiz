var express = require('express');
var router = express.Router();
//var util = require('util');
//var mongodb = require('mongodb');
//var client = mongodb.MongoClient;


/* GET home page. */
router.get('/', function(req, res) {
    res.render('signup', { title: 'Login' });
});

router.post('/signupok',function(req,res){
    console.log('Category: ' + req.body.name);
    //console.log('Type: ' + req.query['email']);

    var name=req.body.name;
    var email=req.body.email;
    var phone=req.body.phone;
    var pwd=req.body.password;
    var rePwd=req.body.repassword;
    var gender=req.body.gender;

    console.log(name, email, phone, pwd, rePwd, gender);
    var document = {name: name, email: email, phone : phone,password : pwd, repassword :rePwd,gender :gender };
    var users=req.app.db.collection("users");
    users.insert(document, function(err, db){
                if (err) throw err;
                console.log('Data inserted');
            });


    res.render('index');

});




module.exports = router;
