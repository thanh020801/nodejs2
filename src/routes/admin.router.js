const express = require('express')

const adminControllers = require('../controllers/admin.controller.js')

const router = express.Router()

router.post('/product/create', adminControllers.create)
router.get('/product/:id', adminControllers.findOne)
router.put('/product/:id', adminControllers.update)
router.delete('/product/:id', adminControllers.delete)
router.delete('/product', adminControllers.deleteAll)
router.get('/product', adminControllers.findAll)
// Routing process Account user
// router.get('/user', adminControllers.findAllUser)
// router.delete('/user/:id', adminControllers.deleteUser)
// router.put('/user/:id', adminControllers.updateUser)

router.get('/', adminControllers.dashboard)

module.exports = router

