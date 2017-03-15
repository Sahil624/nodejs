var express = require('express');
var path = require('path');
var fs = require('fs');
var bodyparser = require('body-parser');
var app = express();

app.use(bodyparser());

app.use('/cssfiles', express.static(__dirname+'/assets'));

app.get('/',function (req,res) {
	res.sendFile('index.html',{root:path.join(__dirname , './pages')});

	// var response = 'Hello!'+req.query.firstname;
	// res.end(response);
});

app.post('/',function (req,res) {
	//res.sendFile('index.html',{root:path.join(__dirname , './pages')});

	// var response = 'Hello!'+req.query.firstname;
	// res.end(response);

	res.end(JSON.stringify(req.body))
});





app.listen(1337);