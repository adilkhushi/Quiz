/**
 * Created by KHUSHI on 11/25/2014.
 */
var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res) {
    res.render('contact', { title: 'Express' });
});

router.post('/sendemail', function(req, res) {

    var smtpTransport = nodemailer.createTransport("SMTP",{
        service: "Gmail",
        port:"465",
        auth: {
            user: "quiz.challenge44@gmail.com",
            pass: "netsol2@"
        }
    });

    var mailOptions = {
        from: 'adil_44@live.com', // sender address
        to: 'adil.khushi@ymail.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world ✔', // plaintext body
        html: '<b>Hello world ✔</b>' // html body
    };

// send mail with defined transport object
    smtpTransport.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
            res.render('index');
        } else {
            console.log('Message sent: ' + info.response);
            res.render('login');
        }
    });

});

module.exports = router;
