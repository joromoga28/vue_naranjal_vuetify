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
        this.router.post("/usuario/login", objUsuarioC.login);
        this.router.get("/usuario", objUsuarioC.getUsuarios);
        this.router.get("/usuario/:id", objUsuarioC.getUsuario);
        this.router.put("/usuario/:id", objUsuarioC.setUsuario);
        this.router.delete("/usuario/:id", objUsuarioC.deleteUsuario);

    }

}

module.exports = UsuarioRouter;