const mongoose = require('mongoose')
const { BadRequestError } = require('../error.js')
const handlePromise = require('../helpers/helpers')
const  products = require('../models/product.model.js')
const  userAccount = require('../models/user.model.js')


class UserControllers {

    async addCart(req,res,next){
        if(Object.keys(req.body).length === 0){
            return next(new BadRequestError(400,
                "Data to update can to be empty"))
        }
        const { id } = req.params
        const condition = {
            _id: id && mongoose.isValidObjectId(id) ? id : null,
        }

        const [error, document] = await handlePromise(
            userAccount.findOneAndUpdate(
                condition, req.body ,{new: true,},
            )
        )

        if(error) {
            return next(new BadRequestError(500,
                `Error updating contact with id=${req.params.id}`))
        }

        if(!document){
            return next(new BadRequestError(404, "Contact not Found"))
        }

        return res.send({ massage: "Contact was update successfully",})
    }
 //    async addCart(req,res){
	//     res.send({ massage: "buy Cart product"})
	// }
    async buy(req,res){
	    res.send({ massage: "buy Cart product"})
	}





	async createUserAccount(req,res,next){
	        if(!(req.body.userName || req.body.password)){
	            return next(new BadRequestError(400, "UserName or password can not be empty"))           
	        }
	        const user = new userAccount({
	        	name: req.body.name,
	        	userName: req.body.userName,
	        	password: req.body.password,
	        })


	        // const user = new userAccount({
	        // 	name: "Hoàng Anh",
	        // 	userName: "Anh123",
	        // 	password: "9999999999",
	        // 	permission: 0,
	        // })

	        const [error, document] = await handlePromise(user.save())
	        if(error){
	        	console.log(error)
	            return next(new BadRequestError(500, 
	            	"An error occurred while creating the products"))
	        }
	        return res.send(document)
	    }
	}
module.exports = new UserControllers