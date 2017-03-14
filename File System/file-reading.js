var fs = require('fs');


console.log('Executed before reading');

fs.readFile('./files/file','utf8',function(err,data){
	console.log(data);
});


console.log('This might execute after reading file');