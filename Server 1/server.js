var http = require('http');
var server = http.createServer(engine);

server.listen(1337,function(){
	console.log("server requested");
});

function engine(request,response){
	 response.writeHead(200,{'Content-Type':'text/plain'});
	 response.end('Hey there from server);
}

