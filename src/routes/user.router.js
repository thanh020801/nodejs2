const express = require('express')

const userControllers = require('../controllers/user.controller.js')
const productControllers = require('../controllers/product.controller.js')

const router = express.Router()

router.get('/buy/:id', userControllers.buy)
router.get('/cart:id', userControllers.addCart)
router.post('/login', userControllers.login)
router.post('/login/create', userControllers.createUserAccount)
router.get('/', productControllers.findAll)
module.exports = router

