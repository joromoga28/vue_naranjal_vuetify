const usuario = require('../models/usuario');

class UsuarioController {

    constructor() {

    }

    registrar(req, res) {
        usuario.create(req.body, (error, data) => {
            if (error) {
                res.status(500).json({ error });
            } else {
                res.status(201).json(data);
            }
        });
    }

    getUsuario(req, res) {
        usuario.find((error, data) => {
            if (error) {
                res.status(500).json({ error });
            } else {
                res.status(200).json(data);
            }
        });
    }
/*
    setUsuario(req, res) {
        let { id, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, email, identificacion, tipo_usuario } = req.body;
        let objUsuario = {
            primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, email, identificacion, tipo_usuario
        };
        usuario.findByIdAndUpdate(id, { $set: objUsuario}, (error, data) => {
            if (error) {
                res.status(500).json({ error });
            } else {
                res.status(200).json(data);
            }
        });
    }*/

    delete(req, res){
        let { id } = req.body;
        usuario.findByIdAndDelete(id, (error, data) => {
            if (error) {
                res.status(500).json(error);
            } else {
                res.status(200).json(data);
            }
        });
    }
}

    module.exports = UsuarioController;
