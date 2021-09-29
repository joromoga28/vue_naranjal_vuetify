const express = require('express');
const ProyectoController = require('../controllers/proyectoController');

class ProyectoRouters{

    constructor(){
        this.router = express.Router();
        this.config();
    }

    config(){
        const objProyectoC = new ProyectoController();
        this.router.post("/proyecto",objProyectoC.registrar);
    }

}

module.exports = ProyectoRouters;