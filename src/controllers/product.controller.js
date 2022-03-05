const mongoose = require('mongoose')
const { BadRequestError } = require('../error.js')
const handlePromise = require('../helpers/helpers')
const  products = require('../models/product.model.js')

class ProductControllers {

    async findAll(req,res,next){
        const condition = { }
        const { name } = req.query
        if(name){
            condition.name = { $regex: new RegExp(name), $options: "i"}
        }

        const [error,documents] = await handlePromise(products.find(condition))
        if(error){
            return next(new BadRequestError(500,
                "An error occurred while retrieving products"))
        }
        return res.send(documents)
    }

    async findOne(req,res,next){
        const { id } = req.params
        const condition = {
            id: id && mongoose.isValidObjectId(id) ? id:null,
        }

        const [error,document] = await handlePromise(products.findOne(condition))

        if(error){
            return next(new BadRequestError(500,
                `Error retrieving contact with id=${req.params.id}`))
        }
        if(!document){
            return next(new BadRequestError(404, "products not Found"))
        }
        return res.send(document)
    }
    async findAllCart(req,res,next){
        const condition = { }
        const { cart } = req.body
        if(cart){
            condition.cart.id = { $regex: new RegExp(name), $options: "i"}
        }

        const [error,documents] = await handlePromise(products.find(condition))
        if(error){
            return next(new BadRequestError(500,
                "An error occurred while retrieving products"))
        }
        return res.send(documents)
    }

	async detail(req,res){
	    res.send({ massage: "detail porduct handler"})
	}
}
module.exports = new ProductControllers


// 621ce8016fd2b3a9143bffa9
// 621de0ea7c0e0e112622fe2c