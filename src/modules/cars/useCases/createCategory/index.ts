import {CreateCategoriesUseCase} from './CreateCategoryUseCase'
import {CreateCategoryController} from './CreateCategoryController'
import {CategoriesRepository} from '../../repositories/implementations/CategoriesRepository'


// const categoriesRepository = CategoriesRepository.getInstance()
const categoriesRepository = null
const createCategoryUseCase = new CreateCategoriesUseCase(categoriesRepository)
const createCategoryController = new CreateCategoryController(createCategoryUseCase)

export {
    createCategoryUseCase,
    createCategoryController,
}