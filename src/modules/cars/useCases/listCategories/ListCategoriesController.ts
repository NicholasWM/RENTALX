import {Request, Response} from 'express'
import { ListCategoriesUseCase } from './CreateCategoryUseCase'

class ListCategoriesController {
    constructor(private listCategoriesUseCase: ListCategoriesUseCase){}
    handle(req:Request, res: Response):Response{
        const all = this.listCategoriesUseCase.execute()
        return res.status(201).json(all)
    }
}

export { ListCategoriesController }