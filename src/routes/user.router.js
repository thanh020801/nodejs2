const express = require('express')

const userControllers = require('../controllers/user.controller.js')

const router = express.Router()

router.get('/buy/:id', userControllers.buy)
router.get('/cart', userControllers.findAllCart)
router.get('/', userControllers.findAll)
module.exports = router

