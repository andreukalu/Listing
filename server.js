const express = require('express')
var	mongoose = require("mongoose"),
	user = require("./models/user")


mongoose.connect('mongodb://localhost/listingDb')


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we are connected');
});


const app = express()

app.get('/', function (req, res) {
  res.sendfile(__dirname + 'public/index.html');
})

app.listen(80, function () {
  console.log('Example app listening on port 80')
})