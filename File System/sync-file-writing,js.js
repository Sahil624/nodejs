var fs = require('fs');


console.log('Executed before writing');

var data = fs.writeFileSync('./files/file2','File 2 is written','utf8');


console.log('This might execute after writing file');