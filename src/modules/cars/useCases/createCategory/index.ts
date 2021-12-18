import {CreateCategoriesUseCase} from './CreateCategoryUseCase'
import {CreateCategoryController} from './CreateCategoryController'
import {CategoriesRepository} from '../../repositories/CategoriesRepository'


const categoriesRepository = new CategoriesRepository()
const createCategoryUseCase = new CreateCategoriesUseCase(categoriesRepository)
const createCategoryController = new CreateCategoryController(createCategoryUseCase)

export {
    createCategoryUseCase,
    createCategoryController,
}