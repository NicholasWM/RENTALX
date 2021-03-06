import {Request, Response} from 'express'
import { container } from 'tsyringe'
import { ListSpecificationsUseCase } from './ListSpecificationUseCase'

class ListSpecificationsController {
    async handle(req:Request, res: Response):Promise<Response>{
        const listSpecificationsUseCase = container.resolve(ListSpecificationsUseCase)
        const all = await listSpecificationsUseCase.execute()
        return res.status(201).json(all)
    }
}

export { ListSpecificationsController }