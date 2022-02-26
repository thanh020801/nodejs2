const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const router = require('./src/routes')
const config = require('./src/config')

const PORT = config.app.port
const URI = config.db.uri
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))


router(app)


mongoose.connect(URI)
	.then(()=>{
		app.listen(PORT , ()=>{
			console.log("Server is running: " ,PORT)
		})
		console.log("Connected to database")
	})
	.catch((err)=>{
		console.error("err: ", err)
	})