class ProductControllers {

	async findAll(req,res){
    	res.send({ massage: "findAll product"})
    }

    async findOne(req,res){
	    res.send({ massage: "findOne product"})
	}

	async detail(req,res){
	    res.send({ massage: "detail porduct handler"})
	}
}
module.exports = new ProductControllers