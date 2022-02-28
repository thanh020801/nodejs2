const mongoose = require('mongoose')

const userAccount = new mongoose.Schema({
	id: {
		type: mongoose.Schema.Types.ObjectId,
		index: true,
	},
	userName: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	dateCreate: {
		type: Date,
		required: true,
		default: Date.now,
	},
	permission: {
		type: Number,
		required: true,
		default: 0,
	},
})

userAccount.method('toJSON', function(){
	const { __v, _id , ...object } = this.toObject()
	object.id = _id
	return object
})

module.exports = mongoose.model('Account' , userAccount), 
	


// module.exports = 