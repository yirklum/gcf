// Require models
var db = require("../models");

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
  };
  