const mongoose = require('mongoose')

const adminManager = new mongoose.Schema({
	income: {
		type: Number,
		required: true,
	},
	numbersAccess: {
		type: Number,
		required: true,
	},
	numbersProductBuy: {
		type: Number,
		required: true,
	},
	totalUser:{
		type: Number,
	},
	totalProduct:{
		type: Number,
	},
},
{ timestamps: true }
)

adminManager.method('toJSON', function(){
	const { __v, _id , ...object } = this.toObject()
	object.id = _id
	return object
})

module.exports = mongoose.model('adminManager' , adminManager)
	


// module.exports = 