const express = require("express");
const ProyectoController = require("./controllers/proyectoController");
const DatabaseConnection = require("./database/databaseConnection");
const ProyectoRouters = require("./routers/proyectoRouter");

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
        /********CREAR RUTAS********/
        const proyectoRouters = new ProyectoRouters();
        /*******Añadir las rutas a la app express********/
        this.app.use(router);
        this.app.use(proyectoController.router);
        this.app.listen(this.app.get('port'), () => {
            console.log("Corriendo puerto =>", this.app.get('port'));
        });
    }
}

const obj = new Server();