import {ListSpecificationsController} from './ListSpecificationsController'
import {ListSpecificationsUseCase} from './ListSpecificationUseCase'
import {CategoriesRepository} from '../../repositories/implementations/CategoriesRepository'


// const categoriesRepository = CategoriesRepository.getInstance()
const categoriesRepository = null
const listSpecificationUseCase = new ListSpecificationsUseCase(categoriesRepository)
const listSpecificationsController = new ListSpecificationsController(listSpecificationUseCase)

export {
    listSpecificationUseCase,
    listSpecificationsController,
}