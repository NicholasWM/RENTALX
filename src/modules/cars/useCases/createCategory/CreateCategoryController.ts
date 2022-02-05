import {Request, Response} from 'express'
import { CreateCategoriesUseCase } from './CreateCategoryUseCase'
import { container } from 'tsyringe'


class CreateCategoryController {
    async handle(req:Request, res: Response):Promise<Response>{
        try {
            const {name, description} = req.body
            const createCategoryUseCase = container.resolve(CreateCategoriesUseCase)
            await createCategoryUseCase.execute({name, description})
            return res.status(201).send()
        } catch (error) {
            return res.status(400).json({error})
        }
    }
}

export { CreateCategoryController }