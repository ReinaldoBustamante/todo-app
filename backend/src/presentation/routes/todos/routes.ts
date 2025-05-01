import { Router } from "express";


export class todosRoutes{
    
    public static router(): Router {
        const router = Router()
        router.get('/', (req, res) => {
            res.json({message: "todo routes"})
        })
        return router
    }
}