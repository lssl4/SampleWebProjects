var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	firstName: {type:String, require:true},
	lastName: {type:String, require:true},
    	email: {type:String, require:true},
    	//age: {type:Number, require:true}
});
    	
mongoose.model('User', userSchema, 'user');
    			
