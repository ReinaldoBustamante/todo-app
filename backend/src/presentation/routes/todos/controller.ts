import { Request, Response } from "express"
import { prisma } from "../../../config/prisma"
import { CreateTodoDto } from "../../../domain/dtos/createTodo.dto"
import { CustomError } from "../../../domain/errors/custom.error"
import { UpdateTodoDto } from "../../../domain/dtos/updateTodo.dto"

export class TodosController {
    
    public getTodos = async (req: Request, res: Response) => {
        try {
            const todos = await prisma.todo.findMany()
            res.json(todos)
        } catch (e) {
            res.status(500).json({error: "Internal server error"})
        }
    }

    public createTodo = async (req: Request, res: Response) => {
        const [error, createTodoDto] = CreateTodoDto.create(req.body)
        try{
            if(error) CustomError.badRequest(error)
            const todo = await prisma.todo.create({
                data: createTodoDto!
            })
            res.json(todo)
        } catch (e) {
            if (e instanceof CustomError){
                res.status(e.statusCode).json({error: e.message})
            } else {
                res.status(500).json({error: 'Internal server error'})
            }
        }
    }

    public deleteTodo = async (req: Request, res: Response) => {
        const id = +req.params.id
        try {
            const isCreated = !!(await prisma.todo.findFirst({
                where: {
                    id: id
                }
            }))
            if(!isCreated) CustomError.badRequest(`Todo with id: ${id} not found`)
            
            const todoDeleted = await prisma.todo.delete({
                where: {
                    id: id
                }
            })
            res.json(todoDeleted);
        } catch (e) {
            if(e instanceof CustomError){
                res.status(e.statusCode).json({error: e.message})
            } else {
                res.status(500).json({error: 'Internal server error'})
            }
        }
    }
    public updateTodo = async (req: Request, res: Response) => {
        const [error, updateTodoDto] = UpdateTodoDto.create(req.body)
        const id = +req.params.id

        try {
            const isCreated = !!(await prisma.todo.findFirst({
                where: {
                    id: id
                }
            }))
            if(!isCreated) CustomError.badRequest(`Todo with id: ${id} not found`)
            
            const todo = await prisma.todo.update({
                where: {
                    id: id
                },
                data: updateTodoDto!
            })
            res.json(todo)
            
        } catch (e) {
            if(e instanceof CustomError){
                res.status(e.statusCode).json({error: e.message})
            } else {
                res.status(500).json({error: 'Internal server error'})
            }
        }
    }


}