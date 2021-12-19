import {ListCategoriesController} from './ListCategoriesController'
import {ListCategoriesUseCase} from './CreateCategoryUseCase'
import {CategoriesRepository} from '../../repositories/implementations/CategoriesRepository'


const categoriesRepository = CategoriesRepository.getInstance()
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository)
const listCategoriesController = new ListCategoriesController(listCategoriesUseCase)

export {
    listCategoriesUseCase,
    listCategoriesController,
}