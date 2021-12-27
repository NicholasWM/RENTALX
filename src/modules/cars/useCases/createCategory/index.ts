import {CreateCategoriesUseCase} from './CreateCategoryUseCase'
import {CreateCategoryController} from './CreateCategoryController'
import {CategoriesRepository} from '../../repositories/implementations/CategoriesRepository'

export default ():CreateCategoryController=>{

    const categoriesRepository = new CategoriesRepository()
    // const categoriesRepository = null
    const createCategoryUseCase = new CreateCategoriesUseCase(categoriesRepository)
    const createCategoryController = new CreateCategoryController(createCategoryUseCase)
    
    return createCategoryController
}
