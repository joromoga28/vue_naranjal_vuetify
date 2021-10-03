const express = require("express");
const DatabaseConnection = require("./database/databaseConnection");
const ProyectoRouter = require('./routers/proyectoRouter');
const UsuarioRouter = require('./routers/usuarioRouter');
const cors = require('cors');
class Server {

    constructor() {
        const dbConnection = new DatabaseConnection();
        this.app = express();
        this.config();
    }

    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(express.json());
        this.app.use(cors({
            origin: '*',
            methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
        }));
        let router = express.Router();
        router.get('/', (req, res) => {
            res.status(200).json({ message: 'All Ok' });
        });
        const proyectoRouter = new ProyectoRouter();
        const usuarioRouter = new UsuarioRouter();
        this.app.use(router);
        this.app.use(proyectoRouter.router);
        this.app.use(usuarioRouter.router);
        this.app.listen(this.app.get('port'), () => {
            console.log("Corriendo puerto =>", this.app.get('port'));
        });
    }
}

const obj = new Server();