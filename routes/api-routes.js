// Require models
var db = require("../models");
// const nodemailer = require('nodemailer');

// Routes
module.exports = function (app) {

    // POST route for saving a new inquiry
    app.post("/api/inquiries", function (req, res) {
      
      // console.log("newInquiry Data:");
      // console.log(req.body);
      
      db.Inquiries.create({
  
        title: req.body.title,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        services: req.body.services,
        description: req.body.description,
        date: req.body.date
      })
        .then(function(dbInquiries) {
          res.json(dbInquiries);
        })
          .catch(function(err) {
            res.json(err);
          });
    });




    // require("../routes/api-routes")(app);



// app.post('/send', function(req, res, next) {
//   const transporter = nodemailer.createTransport({
//     service: 'aol',
//     auth: {
//       user: 'yirklum@aol.com',
//       pass: 'ar3076'
//     }
//   })
// })
//   const mailOptions = {
//     from: `yirklum@aol.com`,
//     to: '${req.body.email}',
//     subject: `Subject`,
//     text: `Message`,
//     // replyTo: `${req.body.email}`
//   }
//   transporter.sendMail(mailOptions, function(err, res) {
//     if (err) {
//       console.error('there was an error: ', err);
//     } else {
//       console.log('here is the res: ', res)
//     }
//   })

// var transporter = nodemailer.createTransport({
//   service: 'AOL',
//   auth: {
//     user: 'yirklum@aol.com',
//     pass: 'ar3076'
//   }
// });

// var mailOptions = {
//   from: 'yirklum@aol.com',
//   to: 'req.body.email',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });



  };
  


  // module.exports = nodemailer;
