const mongoose = require('mongoose');

const schema = mongoose.Schema;

const userSchema = new schema({
	name :{
		type:String,
		required:true
	},
	email:{
		type:String,
		required:true
	},
	age: {
		type:Number,
		required:true
	}
});

const model = mongoose.model('users',userSchema);
module.exports= model;