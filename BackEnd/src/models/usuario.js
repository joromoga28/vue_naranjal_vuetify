const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    primer_nombre: {
        type: String
    },
    segundo_nombre: {
        type: String
    },
    primer_apellido: {
        type: String
    },
    segundo_apellido: {
        type: String
    },
    email: {
        type: String
    },
    identificacion: {
        type: String
    },
    tipo_usuario: {
        type: String
    }
}, {
    collection: 'usuarios'
});

module.exports = mongoose.model('Usuario', usuarioSchema);