<<<<<<< HEAD
const express = require('express');
const ProyectoController = require('../controllers/proyectoController');

class ProyectoRouter{

    constructor(){
        this.router = express.Router();
        this.config();
    }

    config(){
        const objProyectoC = new ProyectoController();
        this.router.post("/proyecto", objProyectoC.registrar);
        this.router.get("/proyecto", objProyectoC.getProyectos);
        /*this.router.put("/proyecto", objProyectoC.setProyecto);*/
        this.router.delete("/proyecto", objProyectoC.delete);
        
        

    }

}

module.exports = ProyectoRouter;
=======
>>>>>>> 77214a9c30877a574a7d4987b4a847ce11bbdaff
