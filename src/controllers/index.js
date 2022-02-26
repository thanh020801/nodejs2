// const contacts = {
// 	create : async (req,res) =>{
//     	res.send({ massage: "create handler"})
// 	},

// 	findAll: async (req,res) =>{
//     	res.send({ massage: "findAll handler"})
// 	},
// 	findOne: async (req,res) =>{
// 	    res.send({ massage: "findOne handler"})
// 	},
// 	update: async (req,res) =>{
// 	    res.send({ massage: "update handler"})
// 	},

// 	deleted: async (req,res) =>{
// 	    res.send({ massage: "delete handler"})
// 	},
// 	deleteAll: async (req,res) =>{
// 	    res.send({ massage: "deleteAll handler"})
// 	},
// }
// module.exports = contacts


class Contact {
	async create(req, res){
		res.send({ massage: "create handler"})
	}

	async findAll(req,res){
    	res.send({ massage: "findAll handler"})
    }

    async findOne(req,res){
	    res.send({ massage: "findOne handler"})
	}

	async update(req,res){
	    res.send({ massage: "update handler"})
	}

	async delete(req,res){
	    res.send({ massage: "delete handler"})
	}

	async deleteAll(req,res){
	    res.send({ massage: "deleteAll handler"})
	}

}
module.exports = new Contact
