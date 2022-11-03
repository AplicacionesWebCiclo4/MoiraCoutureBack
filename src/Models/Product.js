const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        require: true
    },
    price:{
        type: Number,
        required: true
    },
    

});


module.exports = mongoose.model('Product', productSchema);