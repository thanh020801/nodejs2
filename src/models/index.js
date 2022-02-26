const mongoose = require('mongoose')

const userAccount = new mongoose.Schema({
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

const product = new mongoose.Schema({
	id: {
		type: mongoose.Schema.Types.ObjectId,
		index: true,
	}
	name: {
		type: String,
		required: true,
		index: true,
	},

	price: {
		type: Number,
		required: true,
		default: 0,
	}

	discount: {
		type: Number,
		default: 0,
	}

	brand: {
		type: String,
		default: "",
	}

	color: {
		type: String,
		default: "",
	}

	size: {
		type: String,
		default: "",
	}

	detail: {
		type: String,
		default: "",
	}

	dateCreate: {
		type: Date,
		required: true,
		default: Date.now,
	},


})

module.exports = mongoose.model('Account' , userAccount)

module.exports = mongoose.model('Product' , product)