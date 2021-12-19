import { Request, Response } from 'express'
import { UseCase } from './UseCase'

class Controller {
    constructor(private useCase: UseCase) { }
    handle(req: Request, res: Response): Response {
        const { file } = req
        this.useCase.execute(file)
        return res.send()
    }
}

export { Controller }