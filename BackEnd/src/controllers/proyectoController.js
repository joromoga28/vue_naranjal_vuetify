const proyecto = require('../models/proyecto');

class ProyectoController {
    constructor() {}

    registrar(req, res) {
        proyecto.create(req.body, (error, data) => {
            if (error) {
                res.status(500).json({ error });
            } else {
                res.status(201).json(data);
            }

        });
    }

    getProyectos(req, res) {
        proyecto.find((error, data) => {
            if (error) {
                res.status(500).json({ error });
            } else {
                res.status(200).json(data);
            }
        })
    }

    getProyecto(req, res) {
        let { id } = req.params;
        proyecto.find({ id_estudiante: id }, (error, data) => {
            if (error) {
                res.status(500).json(error);
            } else {
                res.status(200).json({ data });
            }
        });
    }

    setProyecto(req, res) {
        let { id, titulo_proyecto, formulacion_problema, pregunta_investigacion, objetivo_general, objetivos_especificos, justificacion } = req.body;
        let objProyecto = {
            titulo_proyecto,
            formulacion_problema,
            pregunta_investigacion,
            objetivo_general,
            objetivos_especificos,
            justificacion
        }
        proyecto.findByIdAndUpdate(id, { $set: objProyecto }, (error, data) => {
            if (error) {
                res.status(500).json({ error });
            } else {
                res.status(200).json(data);
            }
        })
    }

    deleteProyecto(req, res) {
        let { id } = req.params;
        proyecto.findByIdAndRemove(id, (error, data) => {
            if (error) {
                res.status(500).json({ error });
            } else {
                res.status(200).json(data);
            }
        })
    }
}

module.exports = ProyectoController;