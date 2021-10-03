const express = require('express');
const ProyectoController = require('../controllers/proyectoController');

class ProyectoRouter {

    constructor() {
        this.router = express.Router();
        this.config();
    }

    config() {
        const objProyectoC = new ProyectoController();
        this.router.post("/proyecto", objProyectoC.registrar);
        this.router.get("/proyecto", objProyectoC.getProyectos);
        this.router.get("/proyecto", objProyectoC.getProyecto);
        this.router.put("/proyecto", objProyectoC.setProyecto);
        this.router.delete("/proyecto/:id", objProyectoC.deleteProyecto);
    }
}

module.exports = ProyectoRouter;