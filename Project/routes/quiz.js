var express = require('express');
var router = express.Router();
var questionArray = [];

/* GET home page. */
router.get('/', function(req, res) {
    res.render('quiz', { title: 'Login' });
});

router.post('/add', function(req, res) {

//    var question;
//    var question=req.body.question;
//    var answer1=req.body.Answer1;
//    var answer2=req.body.Answer2;
//    var answer3=req.body.Answer3;
//    var answer4=req.body.Answer;
//    var correctAnswer=req.body.answer;
//    var quizName=req.body.quizName;
//    var quizType=req.body.quizType;
//
//    if (answer3==undefined)
//    {
//        question={
//            "question":question,
//            "answer1":answer1,
//            "answer2":answer2,
//            "answer3":"",
//            "answer4":"",
//            "correctAnswer":correctAnswer
//        };
//    }
//    else if (answer3==undefined & answer4==undefined)
//    {
//        question={
//            "question":question,
//            "answer1":answer1,
//            "answer2":answer2,
//            "answer3":"",
//            "answer4":"",
//            "correctAnswer":correctAnswer
//        };
//    }
//    else if (answerD==undefined)
//    {
//        question={
//            "question":question,
//            "answer1":answer1,
//            "answer2":answer2,
//            "answer3":answer3,
//            "answer4":"",
//            "correctAnswer":correctAnswer
//        };
//    }
//    else
//    {
//        question={
//            "question":question,
//            "answer1":answer1,
//            "answer2":answer2,
//            "answer3":answer3,
//            "answer4":answer4,
//            "correctAnswer":correctAnswer
//        };
//    }
//
//
//
//    console.log("Q:"+question+"A :"+ answer1+"B :"+answer2+"C :"+answer3+"D :"+answer4+ "radio :"+correctAnswer +quizName +":"+quizType);
//    //console.log("Q:"+question+"A :"+ answerA+"B :"+answerB+"C :"+answerC+"D :"+answerD);
////
////    var question={
////        "question":question,
////        "answerA":answerA,
////        "answerB":answerB,
////        "answerC":answerC,
////        "answerD":answerD,
////        "correctAnswer":correctAnswer
////    };
//    questionArray.push(question);

 //   console.log(questionArray);
  //  res.render('quiz', { title: 'Login' });
});

router.get('/previous', function(req, res) {
    res.render('login', { title: 'Login' });
});

router.post('/quiz/challenge', function(req, res) {

    var qId=req.body.questionId;
    console.log("id :"+qId);
    var quizArray=req.body.quizArray;
    console.log(quizArray);
    var document = {question:questionArray};
    var quiz=req.app.db.collection("quiz");
    quiz.insert(document, function(err, db){
        if (err) throw err;
        console.log('Data inserted');
    });

    res.render('signup', { title: 'Login' });
});




module.exports = router;