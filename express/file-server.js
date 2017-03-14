var express = require('express');
var app = express();

app.use('/cssfiles', express.static(__dirname+'/assets'));

app.get('/hellothere',function (req,res) {
	res.send('Hello There from express');
});

app.listen(1337);