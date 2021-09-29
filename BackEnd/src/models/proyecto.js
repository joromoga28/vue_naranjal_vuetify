const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const proyectoSchema = new Schema({
    titulo_proyecto: {
        type: String
    },
    formulacion_problema: {
        type: String
    },
    pregunta_investigacion: {
        type: String
    },
    objetivo_general: {
        type: String
    },
    objetivos_especificos: {
        type: String
    },
    justificacion: {
        type: String
    },
}, {
    collection: 'proyectos'
});

module.exports = mongoose.model('Proyecto', proyectoSchema);