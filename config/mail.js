
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'AOL',
  auth: {
    user: 'yirklum@aol.com',
    pass: 'ar3076'
  }
});

var mailOptions = {
  from: 'yirklum@aol.com',
  to: 'christina.rust@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

 
// $(document).ready(function() {
//     $("#form").on("submit", handleSayHello);
// });




module.exports = nodemailer;






// function handleSayHello(req, res) {
//     // Not the movie transporter!
//     var transporter = nodemailer.createTransport({
//         service: 'AOL',
//         auth: {
//             user: 'yirklum@.com', // Your email id
//             pass: 'ar3076' // Your password
//         }
//     });
//     var text = 'Hello world';

//     var mailOptions = {
//     from: 'yirklum@aol.com>', // sender address
//     to: 'yirklum@aol.com', // list of receivers
//     subject: 'Email Example', // Subject line
//     text: text //, // plaintext body
//     // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
//     };

//     transporter.sendMail(mailOptions, function(error, info){
//     if(error){
//         console.log(error);
//         res.json({yo: 'error'});
//     }else{
//         console.log('Message sent');
//         res.json({yo: info.response});
//     };
//     });
// }