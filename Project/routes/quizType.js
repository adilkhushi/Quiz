var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('quizType', { title: 'Login' });
});

router.get('/quiz', function(req, res) {

    var quizName = req.query['quizname'];
    var quizType = req.query['quizType'];
    res.render('quiz',{qn:req.query['quizname'],qt:req.query['quizType'],questionId:"1"});

});

module.exports = router;