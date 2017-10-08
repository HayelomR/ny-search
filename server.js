// Include Server Dependencies
require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Require History Schema
var Times = require("./models/Times");

// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));

// -------------------------------------------------

// MongoDB Configuration configuration (Change this URL to your own DB)
var PROD = process.env.NODE_ENV = "production"
if(PROD){
console.log("production")
mongoose.connect(process.env.MONGODB_URI);
}

mongoose.connect("mongodb://heroku_hbm3bfcq:5q59mpm3kmu1r9397a4dhcsbq9@ds113835.mlab.com:13835/heroku_hbm3bfcq");


var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// // get the saved articles
app.get("/api/saved", function(req, res) {
//get some articles 
Times.find({}).exec(function(err, doc) {
  if (err) {
    console.log(err);
  }
  else {
    res.send(doc);
  }
});
});

// // Main "/" Route. Redirects user to rendered React application.
app.get("*", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});
// // get saved files from mongod database
app.get('/api/Saved',function(req,res){
  Times.find({}).
  exec(function(err,doc){
    if(err){
      console.log(err);
    }
    else {
      res.send(doc)
    }
  })
})
// Route to save articles to mongo db .
app.post("/api/saved", function(req, res) {
  // Here we will save the articles .
console.log(req.body);
  Times.create({
   title: req.body.title,
   date: Date.now(),
   url: req.body.web_url
 }, function(err) {
  if (err) {
    console.log(err);
    res.send(JSON.stringify(err));
  }
  else {
    res.send("Saved Article");
  }
});
});

//Route to delete saved article.
app.delete('/api/saved/:id', function(req, res){
  Times.find({'_id': req.params.id}).remove()
    .exec(function(err, doc) {
      res.send(doc);
  });

});

//Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
