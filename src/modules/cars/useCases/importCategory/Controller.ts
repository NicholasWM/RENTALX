import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ImportCategoryUseCase } from './UseCase'

class ImportCategoryController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { file } = req
        const useCase = container.resolve(ImportCategoryUseCase)
        await useCase.execute(file)
        return res.send()
    }
}

export { ImportCategoryController }