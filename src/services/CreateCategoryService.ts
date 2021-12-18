import { ICategoriesRepository } from "../modules/cars/repositories/ICategoriesRepository"

interface IRequest {
    name: string,
    description: string,
}

class CreateCategoriesService {
    constructor(private categoriesRepository: ICategoriesRepository){}
    execute({description, name}:IRequest) {
        const categoryAlreadyExists = this.categoriesRepository.findByName(name)
        if (categoryAlreadyExists) {
            throw new Error('Category already exists' )
        }
        this.categoriesRepository.create({ name, description })
    }
}

export { CreateCategoriesService }