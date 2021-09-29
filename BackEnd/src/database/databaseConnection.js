const mongoose = require('mongoose');

const database = require('./urlDatabase');


class DatabaseConnection {

    constructor() {
        mongoose.connect(database.db).then(() => {
            console.log("Conexión exitosa a la BD");
        }, error => {
            console.log(error);
        }).catch(error => {
            console.log(error);
        });
    }
}

module.exports = DatabaseConnection;