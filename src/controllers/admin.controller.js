class AdminControllers {

	async create(req,res){
    	res.send({ massage: "create admin product"})
    }	

	async findAll(req,res){
    	res.send({ massage: "findAll product"})
    }

    async findOne(req,res){
	    res.send({ massage: "findOne product"})
	}

	async detail(req,res){
	    res.send({ massage: "detail porduct handler"})
	}

	async delete(req,res){
	    res.send({ massage: "delete porduct handler"})
	}

	async deleteAll(req,res){
	    res.send({ massage: "deleteAll porduct handler"})
	}

	async update(req,res){
	    res.send({ massage: "update porduct handler"})
	}
	async dashboard(req,res){
	    res.send({ massage: "dashboard handler"})
	}
}
module.exports = new AdminControllers