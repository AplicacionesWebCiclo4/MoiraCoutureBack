const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    estado: {
        type: String,
        required: true
    },
    fechaOrden: {
        type: Date,
        required: true
    },
    
});

module.exports = mongoose.model('Order', orderSchema);