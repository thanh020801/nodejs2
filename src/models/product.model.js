const mongoose = require('mongoose')


const product = new mongoose.Schema({
	// id: {
	// 	type: mongoose.Schema.Types.ObjectId,
	// 	index: true,
	// },
	name: {
		type: String,
		required: true,
		index: true,
	},

	price: {
		type: Number,
		required: true,
		default: 0,
	},

	discount: {
		type: Number,
		default: 0,
	},

	brand: {
		type: String,
		default: "",
	},

	color: {
		type: String,
		default: "",
	},

	size: {
		type: String,
		default: "",
	},

	img: {
		type: String,
		default: "",
	},


	detail: {
		type: String,
		default: "",
	},
	amounts:{
		type: Number,
	}
},
{ timestamps: true }
)

product.method('toJSON', function(){
	const { __v, _id , ...object } = this.toObject()
	object.id = _id
	return object
})
module.exports = mongoose.model('Product' , product)