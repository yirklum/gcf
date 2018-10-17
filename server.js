
// Require dependencies
var express = require("express");
var bodyParser = require("body-parser");

// Set up port
var PORT = process.env.PORT || 8080;

// Set up express app
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));
// app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));

// Start server so that it can begin listening to client requests.

app.listen(PORT, function() {
  // Log (server-side) when server has started
  console.log("Server listening on: http://localhost:" + PORT);

});