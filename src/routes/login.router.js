const express = require('express')

const loginControllers = require('../controllers/login.controller.js')

const router = express.Router()

router.post('/', loginControllers.login)

router.post('/register', loginControllers.register)


module.exports = router

