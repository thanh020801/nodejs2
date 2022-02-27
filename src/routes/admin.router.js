const express = require('express')

const adminControllers = require('../controllers/admin.controller.js')

const router = express.Router()

router.get('/product/create', adminControllers.create)
router.get('/product/:id', adminControllers.findOne)
router.put('/product/:id', adminControllers.update)
router.delete('/product/:id', adminControllers.delete)
router.delete('/product', adminControllers.deleteAll)
router.get('/product', adminControllers.findAll)
router.get('/', adminControllers.dashboard)

module.exports = router

