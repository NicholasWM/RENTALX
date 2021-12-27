import { CreateSpecificationUseCase } from './CreateSpecificationUseCase'
import { CreateSpecificationController } from './CreateSpecificationController'
import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository'


const specificationsRepository = null
// const specificationsRepository = CategoriesRepository.getInstance()
const createSpecificationUseCase = new CreateSpecificationUseCase(specificationsRepository)
const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase)

export {
    createSpecificationUseCase,
    createSpecificationController,
}