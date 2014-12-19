var express = require('express');
var router = express.Router();
var questionArray = [];

/* GET home page. */
router.get('/', function(req, res) {
    res.render('quiz', { title: 'Login' });
});

router.get('/add', function(req, res) {

    var question;
    var question=req.query["question"];
    var answerA=req.query["Answer1"];
    var answerB=req.query["Answer2"];
    var answerC=req.query["Answer3"];
    var answerD=req.query["Answer4"];
    var correctAnswer=req.query["A"];

    if (answerC==undefined)
    {
        question={
            "question":question,
            "answerA":answerA,
            "answerB":answerB,
            "answerC":"",
            "answerD":"",
            "correctAnswer":correctAnswer
        };
    }
    else if (answerC==undefined & answerD==undefined)
    {
        question={
            "question":question,
            "answerA":answerA,
            "answerB":answerB,
            "answerC":"",
            "answerD":"",
            "correctAnswer":correctAnswer
        };
    }
    else if (answerD==undefined)
    {
        question={
            "question":question,
            "answerA":answerA,
            "answerB":answerB,
            "answerC":answerC,
            "answerD":"",
            "correctAnswer":correctAnswer
        };
    }
    else
    {
        question={
            "question":question,
            "answerA":answerA,
            "answerB":answerB,
            "answerC":answerC,
            "answerD":answerD,
            "correctAnswer":correctAnswer
        };
    }



    console.log("Q:"+question+"A :"+ answerA+"B :"+answerB+"C :"+answerC+"D :"+answerD+ "radio :"+correctAnswer);
    //console.log("Q:"+question+"A :"+ answerA+"B :"+answerB+"C :"+answerC+"D :"+answerD);
//
//    var question={
//        "question":question,
//        "answerA":answerA,
//        "answerB":answerB,
//        "answerC":answerC,
//        "answerD":answerD,
//        "correctAnswer":correctAnswer
//    };
    questionArray.push(question);

    console.log(questionArray);
  //  res.render('quiz', { title: 'Login' });
});

router.get('/previous', function(req, res) {
    res.render('login', { title: 'Login' });
});

router.get('/challenge', function(req, res) {

    var document = {question:questionArray};
    var quiz=req.app.db.collection("quiz");
    quiz.insert(document, function(err, db){
        if (err) throw err;
        console.log('Data inserted');
    });

    res.render('signup', { title: 'Login' });
});




module.exports = router;