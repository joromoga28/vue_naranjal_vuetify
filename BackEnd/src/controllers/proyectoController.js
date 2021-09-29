const proyecto = require('../models/proyecto');

class ProyectoController{

    constructor(){

    }

    registrar(req, res){
        proyecto.create(req.body, (error, data)=>{

        });
    }

}

module.exports = ProyectoController;