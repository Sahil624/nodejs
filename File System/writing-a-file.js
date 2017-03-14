var fs = require('fs');


console.log('Executed before writing');

fs.writeFile('./files/file','Hello There' , 'utf8',function(err){
	console.log('File Written');
});


console.log('This might execute after writing file');