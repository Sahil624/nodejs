var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();

app.use('/cssfiles', express.static(__dirname+'/assets'));

app.get('/',function (req,res) {
	res.sendFile('index.html',{root:path.join(__dirname , './pages')});
});

app.get(/^(.+)$/,function(req,res){
	console.log(path.join(__dirname , './pages',req.params[0]+'.html'));
	try{
		//	console.log('in');
		//console.log('is',fs.startSync(path.join(__dirname , './pages',req.params[0]+'.html')).isFile());
		if(fs.statSync(path.join(__dirname , './pages',req.params[0]+'.html')).isFile()){
			//console.log('pass');
			res.sendFile(req.params[0]+'.html',{root:path.join(__dirname , './pages')});
		}

	}

	catch(err){
		res.sendFile('404.html',{root:path.join(__dirname , './pages')});
	}

})

app.listen(1337);