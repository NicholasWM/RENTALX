import {Request, Response} from 'express'
import { CreateCategoriesUseCase } from './CreateCategoryUseCase'

class CreateCategoryController {
    constructor(private createCategoryUseCase: CreateCategoriesUseCase){}
    async handle(req:Request, res: Response):Promise<Response>{
        const {name, description} = req.body
        await this.createCategoryUseCase.execute({name, description})
        return res.status(201).send()
    }
}

export { CreateCategoryController }