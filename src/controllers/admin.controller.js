const mongoose = require('mongoose')
const { BadRequestError } = require('../error.js')
const handlePromise = require('../helpers/helpers')
const  products = require('../models/product.model.js')
const  adminManager = require('../models/admin.model.js')

class AdminControllers {

    async create(req,res,next){
        if(!req.body.name){
            return next(new BadRequestError(400, "Name can not be empty"))           
        }
        const product = new products({
            name: req.body.name,
            price: req.body.price,
            discount: req.body.discount,
            brand: req.body.brand,
            color: req.body.color,
            size: req.body.size,
            img: req.body.img,
            amounts: req.body.amounts,
            detail: req.body.detail,
        })


        // const product = new products({
        //     name: "Giày nữ đẹp",
        //     price: 3000000,
        //     discount: 10,
        //     brand: "bitis",
        //     color: "White",
        //     size: "28",
        //     img: "........"
        //     detail: "Mẫu giày đẹp với đường nét vô cùng tinh tế.",
        // })

        const [error, document] = await handlePromise(product.save())
        if(error){
        	console.log(error)
            return next(new BadRequestError(500, 
            	"An error occurred while creating the products"))
        }
        return res.send(document)
    }

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

	async detail(req,res){
	    res.send({ massage: "detail porduct handler"})
	}

    async delete(req,res,next){
        const { id } = req.params
        const condition = {
            _id:id && mongoose.isValidObjectId(id) ? id:null,
        }

        const [error, document] = await handlePromise(
            products.findOneAndDelete(condition)
        )

        if(error){
            return next(new BadRequestError(500,
                `Could not delete products with id=${req.params.id}`))
        }

        if(!document){
            return next(new BadRequestError(404, "products not Found"))
        }
        return res.send({message: "products was delete successfully", })
    }

    async deleteAll(req,res,next){
        const [error, data] = await handlePromise(
            products.deleteMany({ })
        )

        if (error){
            return next( new BadRequestError(500,
                "An error occurred while removing all productss"))
        }
        return res.send({
            massage: `${data.deletedCount} productss were deleted successfully`,
        })
    }

    async update(req,res,next){
        if(Object.keys(res.body).length === 0){
            return next(new BadRequestError(400,
                "Data to update can to be empty"))
        }
        const { id } = req.params
        const condition = {
            _id: id && mongoose.isValidObjectId(id) ? id : null,
        }

        const [error, document] = await handlePromise(
            products.findOneAndUpdate(condition, req.body, {
                new: true,
            })
        )

        if(error) {
            return next(new BadRequestError(500,
                `Error updating products with id=${req.params.id}`))
        }

        if(!document){
            return next(new BadRequestError(404, "products not Found"))
        }

        return res.send({ massage: "products was update successfully",})
    }


    async dashboard(req,res,next){
        const condition = { }
        const { name } = req.query
        if(name){
            condition.name = { $regex: new RegExp(name), $options: "i"}
        }

        const [error,documents] = await handlePromise(adminManager.find(condition))
        if(error){
            return next(new BadRequestError(500,
                "An error occurred while retrieving products"))
        }
        return res.send(documents)
    }


}
module.exports = new AdminControllers




























    //     async dashboard(req,res,next){
    //     // if(!req.body.name){
    //     //     return next(new BadRequestError(400, "Name can not be empty"))           
    //     // }
    //     // const product = new products({
    //     //     name: req.body.name,
    //     //     price: req.body.price,
    //     //     discount: req.body.discount,
    //     //     brand: req.body.brand,
    //     //     color: req.body.color,
    //     //     size: req.body.size,
    //     //     img: req.body.img,
    //     //     amounts: req.body.amounts,
    //     //     detail: req.body.detail,
    //     // })


    //     const manager = new adminManager({
    //         income: 50000000,
    //         numbersAccess: 50,
    //         numbersProductBuy: 30,
    //         totalUser: 500,
    //         totalProduct: 1000,
    //     })

    //     const [error, document] = await handlePromise(manager.save())
    //     if(error){
    //         console.log(error)
    //         return next(new BadRequestError(500, 
    //             "An error occurred while creating the products"))
    //     }
    //     return res.send(document)
    // }