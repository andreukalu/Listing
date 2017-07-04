const express = require('express')
var	mongoose = require("mongoose")
var User = require("./models/user")
var bodyParser = require('body-parser')


//mongoose.connect('mongodb://localhost/listingDb')
mongoose.connect('mongodb://andreukalu:Assaigdedilluns1/@cluster0-shard-00-00-dw4bz.mongodb.net:27017,cluster0-shard-00-01-dw4bz.mongodb.net:27017,cluster0-shard-00-02-dw4bz.mongodb.net:27017/listingDb?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we are connected');
});


const app = express()

app.use(express.static('public'))
   /* 'default', 'short', 'tiny', 'dev' */
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

app.get('/', function (req, res) {
	
  res.sendFile(__dirname+'/public/index.html')
})

app.get('/users', function (req, res) {
	var user = new User();
	user.username = req.body.username;
	user.password = req.body.password;
	user.name = req.body.password;
	user.save(function(err){
		if(err){
			res.send("error");
		}else{
			res.send("user created");
		}
	})
})



app.listen(80, function () {
  console.log('Example app listening on port 80')
  console.log(__dirname)
})