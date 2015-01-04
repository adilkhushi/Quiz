var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('quizIndex', { title: 'Express' });
});

router.get('/quizType', function(req, res) {
       res.render('quizType', { title: 'Express' });
});

router.get('/quizShow', function(req, res) {
    console.log("ok");
    res.render('quizShow', { title: 'Express' });
});

module.exports = router;
