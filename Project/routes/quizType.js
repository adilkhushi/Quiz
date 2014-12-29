var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('quizType', { title: 'Login' });
});

router.post('/quiz', function(req, res) {

    var quizName = req.body.quizname;
    var quizType = req.body.quizType;
    res.render('quiz',{qn:quizName,qt:quizType,questionId:"1"});

});

router.post('/challenge', function(req, res) {

    var qId=req.body.questionId;
    console.log("id :"+qId);
    var quizArray=req.body.quizArray;
    console.log(quizArray);
    var document = {Quiz:quizArray};
    var quiz=req.app.db.collection("quiz");
    quiz.insert(document, function(err, db){
        if (err) throw err;
        console.log('Data inserted');
    });

    res.render('signup', { title: 'Login' });

});

module.exports = router;