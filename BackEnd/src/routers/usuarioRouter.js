const express = require('express');
const UsuarioController = require('../controllers/usuarioController');


class UsuarioRouter {

    constructor() {
        this.router = express.Router();
        this.config();
    }

    config() {
        const objUsuarioC = new UsuarioController();
        this.router.post("/usuario", objUsuarioC.registrar);
        this.router.get("/usuario", objUsuarioC.getUsuario);
        /*this.router.put("/usuario", objUsuarioC.setUsuario);*/
        this.router.delete("/usuario", objUsuarioC.deleteUsuario);





    }

}

module.exports = UsuarioRouter;