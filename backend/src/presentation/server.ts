import express, {Request, Response} from 'express'
import { appRoutes } from './routes/router';
import cors from 'cors';

export class ServerApp {
    constructor() {}

    start(){
        const app = express();    
        app.use(cors())
        app.use(express.json());
        app.use('/api', appRoutes.router())

        app.listen(3000, () => {
            console.log("Server running on port 3000")
        })
    }
}