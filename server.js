
// Require dependencies
var express = require("express");
var bodyParser = require("body-parser");
// const nodemailer = require("./routes/api-routes");

// Set up port
var PORT = process.env.PORT || 8080;

// Import models
var db = require("./models");

// Set up express app
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));
// app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));

// Require routes
// require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Set up mysql
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "gcf_DB"
});

// Connect to database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});



// app.post('/send', function(req, res, next) {
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'test-email@gmail.com',
//       pass: 'test123'
//     }
//   })
// })
//   const mailOptions = {
//     from: `${req.body.email}`,
//     to: 'test-email@gmail.com',
//     subject: `${req.body.name}`,
//     text: `${req.body.message}`,
//     replyTo: `${req.body.email}`
//   }
//   transporter.sendMail(mailOptions, function(err, res) {
//     if (err) {
//       console.error('there was an error: ', err);
//     } else {
//       console.log('here is the res: ', res)
//     }
//   })





// Start server so that it can begin listening to client requests.
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    // Log (server-side) when server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
});