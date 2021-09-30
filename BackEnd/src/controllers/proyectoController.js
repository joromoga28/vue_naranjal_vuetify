<<<<<<< HEAD
const proyecto = require('../models/proyecto');

class ProyectoController{

    constructor(){

    }

    registrar(req, res){
        proyecto.create(req.body, (error, data)=>{
            if(error){
                res.status(500).json({error});
            }else{
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
        });
    }

    
/*
    setProyecto(req, res) {
        //Capturar los datos del cuerpo de la peticion
        let { id, titulo_proyecto, formulacion_problema, pregunta_investigacion, objetivo_general, objetivos_especificos, justificacion } = req.body;
        //Crear un objeto con los datos capturados del cuerpo de la petición
        let objProyecto = {
            titulo_proyecto, formulacion_problema, pregunta_investigacion, objetivo_general, objetivos_especificos, justificacion
        }
        //Editamos un proyecto por el id
        proyecto.findByIdAndUpdate(id, { $set: objProyecto }, (error, data) => {
            if (error) {
                res.status(500).json({ error });
            } else {
                res.status(200).json(data);
            }
        });
    }
    */

    delete(req, res) {
        let { id } = req.body;
        proyecto.findByIdAndRemove(id, (error, data) => {
            if (error) {
                res.status(500).json({ error });
            }
            else {
                res.status(200).json(data);
            }
        });
    }
}


module.exports = ProyectoController;
=======
>>>>>>> 77214a9c30877a574a7d4987b4a847ce11bbdaff
