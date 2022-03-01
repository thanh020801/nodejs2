const express = require('express')

const productControllers = require('../controllers/product.controller.js')

const router = express.Router()

router.get('/:id', productControllers.findOne)
// router.get('/detail/:id', productControllers.detail)
router.get('/', productControllers.findAll)

module.exports = router

