import {Controller} from './Controller'
import {UseCase} from './UseCase'
import {CategoriesRepository as Repository} from '../../repositories/implementations/CategoriesRepository'


const categoriesRepository = Repository.getInstance()
const importCategoryUseCase = new UseCase(categoriesRepository)
const importCategorysController = new Controller(importCategoryUseCase)

export {
    importCategoryUseCase,
    importCategorysController,
}
