import { Router, Response, Request } from "express";
import { todosRoutes } from "./todos/routes";

export class appRoutes {
    constructor(){}

    public static router(): Router{
        const router = Router()
        router.use('/todos', todosRoutes.router())
        return router
    }
}