import { Router } from "express";
import { TodosController } from "./controller";


export class todosRoutes{
    
    public static router(): Router {
        const router = Router()
        const todosController = new TodosController()

        router.get('/', todosController.getTodos)
        return router
    }
}