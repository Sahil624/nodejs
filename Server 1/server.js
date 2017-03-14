var http = require('http');


http.createServer(engine).listen(1337);

function engine(request,response){
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.end('Hey there from server');
}