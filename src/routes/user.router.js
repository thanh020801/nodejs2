const express = require('express')

const userControllers = require('../controllers/user.controller.js')
const productControllers = require('../controllers/product.controller.js')

const router = express.Router()

router.get('/buy/:id', userControllers.buy)
router.put('/cart/:id', userControllers.addCart)
router.get('/cart', productControllers.findAllCart)
router.get('/', productControllers.findAll)
module.exports = router

