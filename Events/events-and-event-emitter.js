var event = require('events');
var eventEmitter = new event.EventEmitter();

eventEmitter.on('myEvent',function(a,b){
	console.log(a+b);
});

setTimeout(function(){
	eventEmitter.emit('myEvent','Rock',' and roll');
},2000);