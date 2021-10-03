const usuario = require('../models/usuario');

class UsuarioController {
    constructor() {}

    registrar(req, res) {
        usuario.create(req.body, (error, data) => {
            if (error) {
                res.status(500).json({ error });
            } else {
                res.status(201).json({ data });
            }
        });
    }

    getUsuarios(req, res) {
        usuario.find((error, data) => {
            if (error) {
                res.status(500).json({ error });
            } else {
                res.status(200).json({ data });
            }
        });
    }

    getUsuario(req, res) {
        let { id } = req.body;
        usuario.findById(id, (error, data) => {
            if (error) {
                res.status(500).json(error);
            } else {
                res.status(200).json({ data });
            }
        });
    }

    setUsuario(req, res) {
        let { id, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, email, identificacion, tipo_usuario } = req.body;
        let objUsuario = { primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, email, identificacion, tipo_usuario };
        usuario.findByIdAndUpdate(id, { $set: objUsuario }, (error, data) => {
            if (error) {
                res.status(500).json({ error });
            } else {
                res.status(200).json({ data });
            }
        });
    }

    deleteUsuario(req, res) {
        let { id } = req.body;
        usuario.findByIdAndDelete(id, (error, data) => {
            if (error) {
                res.status(500).json({ error });
            } else {
                res.status(200).json({ data });
            }
        });
    }

    login(req, res) {
        let correo = req.body.email
        let contra = req.body.password
        usuario.findOne({ email: correo }, (error, data) => {
            if (error) {
                res.status(500).json({ mensaje: "Error" });
            } else if (data == null) {
                res.status(200).json({ mensaje: "Usuario no registrado" });
            } else {
                if (contra === data.password) {
                    res.status(200).json({ mensaje: "éxito", data });
                } else {
                    res.status(200).json({ mensaje: "Email/ contraseña incorrectos" });
                }
            }
        });
    }
}

module.exports = UsuarioController;