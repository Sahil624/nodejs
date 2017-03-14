var fs = require('fs');


console.log('Executed before reading');

var data = fs.readFileSync('./files/file','utf8');

console.log(data);

console.log('This might execute after reading file');