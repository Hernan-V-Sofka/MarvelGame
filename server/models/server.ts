import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import rutasGame from '../routes/Games.routes';

/* 
    Clase encargada de inicializar el servidor 
    Contiene las instancias de:
    > La conexion a la base de datos 
    > Los middlewares 
    > Las rutas de direccionamiento de la Api
*/
class Server {

    private app: Application;
    private port: string;

    private apiPaths = {
        login: '/game/'
    }

    constructor() {
        this.app = express();
        this.port = '8000';

        // Llamada al metodo de los meddelwares
        this.middleware();
        this.routes();
    }

    middleware() {
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(express.json());
    }

    routes() {
        this.app.use(this.apiPaths.login, rutasGame);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`);
        });
    }
}

export default Server;