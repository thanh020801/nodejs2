const mongoose = require('mongoose')

const userAccount = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	userName: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	permission: {
		type: Number,
		required: true,
		default: 0,
	},
	cart: {
		type: Array,
		required: true,
		default: [],
	},
},
{ timestamps: true }
)

userAccount.method('toJSON', function(){
	const { __v, _id , ...object } = this.toObject()
	object.id = _id
	return object
})

module.exports = mongoose.model('Account' , userAccount) 
	


