import {Request, Response} from 'express'
import { CreateCategoriesUseCase } from './CreateCategoryUseCase'

class CreateCategoryController {
    constructor(private createCategoryUseCase: CreateCategoriesUseCase){}
    handle(req:Request, res: Response):Response{
        const {name, description} = req.body
        this.createCategoryUseCase.execute({name, description})
        return res.status(201).send()
    }
}

export { CreateCategoryController }