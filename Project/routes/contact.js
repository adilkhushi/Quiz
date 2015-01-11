var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res) {
    res.render('contact', { emailMsg: '' });
});

router.post('/', function(req, res) {

    var userName=req.body.userName;
    var userEmail=req.body.userEmail;
    var userPhone=req.body.userPhone;
    var userMsg=req.body.userMsg;




    var smtpTransport = nodemailer.createTransport("SMTP",{
        service: "Gmail",
        port:"465",
        auth: {
            user: "quiz.challenge44@gmail.com",
            pass: "netsol2@"
        }
    });


console.log('Sender Name :<b>'+userName+'</b><br/>Sender Email :<b>'+userEmail+'</b><br/>Sender Phone :<b>'+userPhone+'</b><br/>Text :<br/><br/>'+userMsg);

    var mailOptions = {
        from: 'adil_44@live.com', // sender address
        to: 'waqas996@gmail.com', // list of receivers
        subject: userName+' contact via quiz challenger', // Subject line
        //text: 'Hello world ✔', // plaintext body
        //html: '<b>Hello world ✔</b>' // html body
        html: 'Sender Name :<b>'+userName+'</b><br/>Sender Email :<b>'+userEmail+'</b><br/>Sender Phone :<b>'+userPhone+'</b><br/>Text :<br/><br/>'+userMsg
    };

// send mail with defined transport object
    smtpTransport.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
            res.render('contact', { emailMsg: 'Email could not sent' });
        } else {
            console.log('Message sent: ' + info.response);
            res.render('contact', { emailMsg: 'Email has been sent' });
        }
    });

});

module.exports = router;
