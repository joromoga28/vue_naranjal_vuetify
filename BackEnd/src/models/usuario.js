const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    primer_nombre: {
        type: String,
        require: [true, "el primer nombre es obligatorio"]
    },
    segundo_nombre: {
        type: String,
    },
    primer_apellido: {
        type: String,
        require: [true, "El primer apellido es obligatorio"]
    },
    segundo_apellido: {
        type: String
    },
    email: {
        type: String,
        require: [true, "El correo  es obligatorio"]
    },
    password: {
        type: String,
        require: [true, "El campo contraseña es obligatorio"]
    },
    identificacion: {
        type: String,
        require: [true, "la identificación es obligatorio"]
    },
    tipo_usuario: {
        type: String,
        require: [true, "El campo tipo usuario es obligatorio"]
    }
}, {
    collection: 'usuarios'
});

module.exports = mongoose.model('Usuario', usuarioSchema);