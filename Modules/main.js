function construc() {
	var nameHolder;

	return {

		name: function(fname,lname){
			nameHolder = fname +' '+ lname;
		},

		consoleLog : function(){
			console.log(nameHolder);
		}
	}
}


module.exports = construc;