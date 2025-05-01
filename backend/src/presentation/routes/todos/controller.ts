import { Request, Response } from "express"

export class TodosController {
    
    public getTodos = (req: Request, res: Response) => {
        res.json({message: "todo routes with controller"})
    }
}