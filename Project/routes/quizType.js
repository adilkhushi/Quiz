var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res) {
    res.render('quizType', { title: 'Login' });
});

router.post('/quiz', function(req, res) {

    var quizName = req.body.quizname;
    var quizType = req.body.quizType;
    var uid = req.session.userId;
    res.render('quiz',{qn:quizName,qt:quizType,questionId:"1",uid:uid});

});

router.post('/challenge', function(req, res) {

    var qId=req.body.questionId;
    console.log("id :"+qId);
    var quizArray=req.body.quizArray;
    console.log(quizArray);


   //var document = {Quiz:quizArray};
    //var document=[quizArray];
   // document = [{"QuizName":"abc","QuizType":"Economics","Question1":{"Question":"A","Answer1":"A1","Answer2":"A2","Answer3":"","Answer4":""}}];
    document = JSON.parse(quizArray);
    console.log(document);




    var quiz=req.app.db.collection("quiz");

  quiz.insert(document, function(err, db){
        if (err) throw err;
        console.log('Data inserted');

        console.log(document['_id']);

    });





    res.render('challenge', { qid: document['_id'] });

});

router.post('/acknowledge', function(req, res) {

    var emailChall=req.body.email;
    var qid=req.body.qid;

    var smtpTransport = nodemailer.createTransport("SMTP",{
        service: "Gmail",
        port:"465",
        auth: {
            user: "quiz.challenge44@gmail.com",
            pass: "netsol2@"
        }
    });

console.log(emailChall);

    var mailOptions = {
        from: 'adil_44@live.com', // sender address
        to: emailChall, // list of receivers
        subject: 'Quiz Challenge', // Subject line
        //text: 'Hello world ✔', // plaintext body
        html: '<b>You have been given quiz challenge</b><br/><br/>Click here to attemp quiz<br/><br/>http://localhost:3000/quizsolve?qid='+qid
    };

// send mail with defined transport object
    smtpTransport.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
            res.redirect('/quizShow');
        } else {
            console.log('Message sent: ' + info.response);
            res.render('acknowledge');
        }
    });

    //res.render('acknowledge', { title: 'Express' });
});

module.exports = router;