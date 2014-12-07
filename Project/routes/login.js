var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('login', { title: 'Login' });
});

router.post('/loginok', function(req, res) {
    console.log('login ok');
    var email=req.body.email;
    var pwd=req.body.password;
    var users=req.app.db.collection("users");
    users.find({email:email, password:pwd}).toArray(function(err,results)
    {
        console.log("length="+results.length);
        if (err) throw err;
        if(results.length>0)
        {
            res.render('index');
        }
        else
        {
            res.render('contact');
        }

    });



});


module.exports = router;
