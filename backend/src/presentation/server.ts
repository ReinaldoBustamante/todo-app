import express, {Request, Response} from 'express'
import { appRoutes } from './routes/router';

export class ServerApp {
    constructor() {}

    start(){
        const app = express();    

        app.use(express.json());
        app.use('/api', appRoutes.router())

        app.listen(3000, () => {
            console.log("Server running on port 3000")
        })
    }
}