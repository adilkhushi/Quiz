var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('login', { loginMsg: '' });
});

router.post('/', function(req, res) {
    //console.log('login ok');
    var email=req.body.email;
    var pwd=req.body.password;
    var users=req.app.db.collection("users");
    sess = req.session;
    users.find({email:email, password:pwd}).toArray(function(err,results)
    {
        //console.log("length="+results.length);
        if (err) throw err;
        if(results.length>0)
        {
            console.log(results);
            //console.log(results[0]._id);
            //res.render('quizIndex');

            //sess.userEmail = results[0].email;
            sess.userId = results[0]._id;
            //console.log(sess.userId);
            res.redirect('/quizIndex');
            res.end();
        }
        else
        {
            //res.render('contact');
            res.render('login', { loginMsg: 'Please Enter Correct Email and Password' });

        }

    });



});


module.exports = router;
