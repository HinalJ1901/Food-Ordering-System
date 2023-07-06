const mongoose = require('mongoose')
const Schema = mongoose.Schema

const menuSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String},
    price: { type: Number, required: true },
    category : {type : String , enum : ["Cakes and Pastries" , "Burger" , "Sandwich" , "Garlic Bread" , "Sub" , "Pizza"]}
    // size: { type: String, required: true }
})

module.exports = mongoose.model('Menu', menuSchema)
