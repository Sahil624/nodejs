var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();

app.use('/cssfiles', express.static(__dirname+'/assets'));

app.get('/',function (req,res) {
	//res.sendFile('index.html',{root:path.join(__dirname , './pages')});

	var response = 'Hello!'+req.query.firstname;
	res.end(response);
});




app.listen(1337);