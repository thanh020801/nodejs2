class BadRequestError extends Error{
	constructor(statusCode, mesage){
		super()
		this.statusCode = statusCode,
		this.mesage = mesage		
	}
}

class HandleError {
	constructor(){
		this.HandleError = (err, responStream = null) =>{
			if(responStream){
				responStream.status(err.statusCode || 500).json({
					mesage: err.mesage || "Internal server Error"
				})
			}else{
				console.log(err)
			}
		}
	}
}
handleError = new HandleError()
module.exports = {
	BadRequestError,
	handleError
}