import express, {Request, Response} from 'express'

export class ServerApp {
    constructor() {}

    start(){
        const app = express();    

        app.use(express.json());
        app.get('/', (req: Request, res: Response) => {
            res.json({message: 'hello world'})
        })

        app.listen(3000, () => {
            console.log("Server running on port 3000")
        })
    }
}