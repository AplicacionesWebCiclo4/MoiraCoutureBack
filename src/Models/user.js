const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true  
    },
    birthDate: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    rol: {
        type: [String],
        required:true
    },
    cedula: {
        type: String,
        unique: true
    },
    address: {
        departamento: String,
        ciudad: String,
        direccion: String,
        referencia: String
    },
    cellphone: {
        type: String
    }
    
});

module.exports = mongoose.model('User', userSchema);