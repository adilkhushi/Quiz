var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    sess = req.session;
    console.log(sess.userId);
    if(sess.userId)
    {
        res.render('quizIndex');
    }
    else{
        res.redirect('/login');
    }

});

router.get('/quizType', function(req, res) {
       res.render('quizType', { title: 'Express' });
});

router.get('/quizShow', function(req, res) {
    console.log("ok");
    res.render('quizShow', { title: 'Express' });
});

module.exports = router;
