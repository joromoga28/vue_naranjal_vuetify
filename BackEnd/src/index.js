const express = require("express");
const DatabaseConnection = require("./database/databaseConnection");

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
        this.app.use(router);
        this.app.listen(this.app.get('port'), () => {
            console.log("Corriendo puerto =>", this.app.get('port'));
        });
    }
}

const obj = new Server();