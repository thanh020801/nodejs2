const mongoose = require('mongoose')
const sha256 = require('sha256')
const { BadRequestError } = require('../error.js')
const handlePromise = require('../helpers/helpers')
const userAccount = require('../models/user.model.js')

class LoginControllers {
    async register(req,res,next){
            if(!(req.body.userName || req.body.password || req.body.name)){
                return next(new BadRequestError(400, "UserName or password can not be empty"))           
            }
            const sashed = await sha256(req.body.password)
            const user = new userAccount({
                name: req.body.name,
                userName: req.body.userName,
                password: sashed,
            })

            const [error, document] = await handlePromise(user.save())
            if(error){
                console.log(error)
                return next(new BadRequestError(500, 
                    "An error occurred while creating the products"))
            }
            return res.send(document)
    }

    // login
    async login(req,res,next){
        try{
            const user = await userAccount.findOne({ userName: req.body.userName })
            if(!user){
                return res.status(404).json("wrong username")
            }
            const hashed = await sha256(req.body.password)
            const isValidPassword  = ( user.password === hashed ) ?  true:false

            if(!isValidPassword){
                return res.status(404).json("wrong password")
            }

            if(isValidPassword){
                return res.status(200).json(user)
            }
        }catch(err){
            return res.status(500).json(err)
        }

    }

}
module.exports = new LoginControllers
