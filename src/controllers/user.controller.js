class UserControllers {

	async findAllCart(req,res){
    	res.send({ massage: "findAll Cart product"})
    }

    async buy(req,res){
	    res.send({ massage: "buy Cart product"})
	}

	async findAll(req,res){
	    res.send({ massage: "findAll porduct handler"})
	}
}
module.exports = new UserControllers