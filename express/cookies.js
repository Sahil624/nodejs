var express = require('express');
var cookieparser = require('cookie-parser');
var app = express();

app.use(cookieparser());


app.get('/',function (req,res) {
	res.cookie('Cokkie!!','Yeah');
	res.end("Are cokkies in  There?")
});


app.get('/removecookie',function (req,res) {
	res.clearCookie('Cokkie!!','Yeah');
	res.end("Cleared")
});

app.listen(1337);