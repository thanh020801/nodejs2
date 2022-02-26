const express = require('express')
const contacts = require('../controllers/index.js')

function route(app){
    app.get('/',contacts.findAll)
    app.post(contacts.create)
    // app.get('/favorite',contacts.findAllFavorite)
    app.get('/:id', contacts.findOne)
    app.put('/:id', contacts.update)
    app.delete('/:id', contacts.delete)
    app.delete('/', contacts.deleteAll)
}
   
module.exports = route