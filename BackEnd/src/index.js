const express = require("express");
const DatabaseConnection = require("./database/databaseConnection");
<<<<<<< HEAD
const ProyectoRouter = require("./routers/proyectoRouter");
const UsuarioRouter = require("./routers/usuarioRouter");
=======
>>>>>>> 77214a9c30877a574a7d4987b4a847ce11bbdaff

class Server {

    constructor() {
        const dbConnection = new DatabaseConnection();
        this.app = express();
        this.config();
    }

    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(express.json());
        let router = express.Router();
        router.get('/', (req, res) => {
            res.status(200).json({ message: 'All Ok' });
        });
<<<<<<< HEAD
        /********CREAR RUTAS********/
        const proyectoRouter = new ProyectoRouter();
        const usuarioRouter = new UsuarioRouter();

        /*******Añadir las rutas a la app express********/
        this.app.use(router);
        this.app.use(proyectoRouter.router);
        this.app.use(usuarioRouter.router);

=======
        this.app.use(router);
>>>>>>> 77214a9c30877a574a7d4987b4a847ce11bbdaff
        this.app.listen(this.app.get('port'), () => {
            console.log("Corriendo puerto =>", this.app.get('port'));
        });
    }
}

const obj = new Server();