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

    //var email = require('mailer');
//
//    var email = require('mailer');
//
//    email.send({
//        host: "smtp.sendgrid.net",
//        port: "25",
//        domain: "smtp.sendgrid.net",
//        authentication: "login",
//        username: (new Buffer("adil.khushi")).toString("base64"),
//        password: (new Buffer("netsol2@")).toString("base64"),
//        to: "adil.khushi@hotmail.com",
//        from: "test@mydomain.com",
//        subject: "node_mailer test email",
//        body: "hello this a test email from the node_mailer"
//    },
//        function(err, result){
//        if(err){ console.log(err); }
//    });
    var smtpTransport = nodemailer.createTransport("SMTP",{
        service: "Gmail",
        port:"465",
        auth: {
            user: "adil.pti44@gmail.com",
            pass: "netsol2@"
        }
    });
////
//    var mailOptions = {
//        from: 'adil_44@live.com>', // sender address
//        to: 'adil.khushi@ymail.com', // list of receivers
//        subject: 'Hello ✔', // Subject line
//        text: 'Hello world ✔', // plaintext body
//        html: '<b>Hello world ✔</b>' // html body
//    };
//
//    console.log(mailOptions);
//    smtpTransport.sendMail(mailOptions, function(error, response) {
//        if (error) {
//            console.log(error);
//            res.end("error");
//        } else {
//            console.log("Message sent: " + response.message);
//            res.end("sent");
//        }
//    });

        // create reusable transporter object using SMTP transport
//    var transporter = nodemailer.createTransport({
//            user: 'adil.pti44@gmail.com',
//            pass: 'netsol2@'
//
//    });

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
