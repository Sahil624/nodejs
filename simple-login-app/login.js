var express = require('express');
var sessions = require('express-session')
var bodyparser = require('body-parser');
var app = express();

var session;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.use(sessions({
	secret : 'fdf87wye1iehiw2ew8973g',
	resave : false,
	saveUninitialized:true
}))

app.get('/login',function (req,res) {
	session = req.session;
	if(session.uni){
		res.redirect('/redirect')
	}
	res.sendFile('./pages/login.html',{root:__dirname});
});

app.post('/login',function (req,res) {

	//res.end(JSON.stringify(req.body))
	session = req.session;

	if(session.uni){
		res.redirect('/redirect')
	}

	//if(req.body.username=='admin'&& req.body.pass=='admin'){
		session.uni = req.body.username;
	//}

	res.redirect('/redirect');

});

app.get('/admin',function(req,resp){
	session = req.session;
	if(session.uni != 'admin'){
		resp.send('Unauthorised access .<a href=\"/login\">login</a>')
	}
	resp.send("Welcome admin. <a href=\"/logout\">logout</a>")
})

app.get('/logout',function(req,res){
	req.session.destroy(function(err){
		res.redirect('/login');
	})
})

app.get('/redirect',function(req,res){
	session = req.session;

	if(session.uni == 'admin'){
		res.redirect('/admin');
	}

	else{
		res.send(req.session.uni+" Not Found.	<a href=\"/logout\">logout</a>")
	}
});



app.listen(1337);