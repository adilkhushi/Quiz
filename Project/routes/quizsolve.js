var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    sess = req.session;
    //console.log(sess.userId);

    //console.log(req.query.qid);
    qid = req.query.qid;

    /*if(sess.userId)
    {
        res.render('quizIndex');
    }
    else{
        res.redirect('/login');
    }*/

   // var ObjectId = mongojs.ObjectId;


    var quizToSolve=req.app.db.collection("quiz");
    var users=req.app.db.collection("users");
    var senderName = "";
    var senderEmail = "";
    quizToSolve.find({ _id: req.app.ObjectId(qid) }).toArray(function(err, results) {

        results.forEach(function(res) {
            senderID = res.SenderId;

            console.log(senderID);
        });


        users.find({ _id: req.app.ObjectId(senderID) }).toArray(function(errr, sender) {
            sender.forEach(function(senderr) {

                senderName = senderr.name;
                senderEmail = senderr.email;
                //console.log(senderName);
                res.render('quizsolve', { quiz: results, senderName : senderName, senderEmail : senderEmail });
            });

        });


        //console.log(JSON.stringify(results));
       // var rr = JSON.stringify(results);




       // console.log(rr['QuizType']);

    });

    //res.render('test1', { title: 'Results' });
});


router.post('/sendquiezresult', function(req, res) {

    var totalQues=req.body.totalQues;
    var CorrectQues=req.body.CorrectQues;
    var sendeerEmail=req.body.sendeerEmail;

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
        to: sendeerEmail, // list of receivers
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
