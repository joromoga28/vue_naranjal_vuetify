const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const proyectoSchema = new Schema({
    id_estudiante: {
        type: String,
        require: [true, "El Id del estudiante es obligatorio"]
    },
    titulo_proyecto: {
        type: String,
        require: [true, "El titulo es obligatorio"]
    },
    formulacion_problema: {
        type: String,
        require: [true, "La Formulación  es obligatorio"]
    },
    pregunta_investigacion: {
        type: String
    },
    objetivo_general: {
        type: String,
        require: [true, "El objetivo general es obligatorio"]
    },
    objetivos_especificos: {
        type: String
    },
    justificacion: {
        type: String,
        require: [true, "La justificación es obligatorio"]
    },
}, {
    collection: 'proyectos'
});

module.exports = mongoose.model('Proyecto', proyectoSchema);