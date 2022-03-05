const express = require('express')
const productRouter = require('./product.Router.js')
const adminRouter = require('./admin.Router.js')
const userRouter = require('./user.Router.js')
const loginRouter = require('./login.Router.js')

function route(app){

    app.use('/product', productRouter)
    app.use('/login', loginRouter)
    app.use('/admin', adminRouter)
    app.use('/', userRouter)
}
   
module.exports = route