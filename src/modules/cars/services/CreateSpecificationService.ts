import { AppError } from "../../../errors/AppError";
import { SpecificationRepository } from "../repositories/implementations/SpecificationRepository";
interface IRequest {
    name: string,
    description: string,
}
class CreateSpecificationService {
    constructor(private specificationRepository: SpecificationRepository){}
    execute({name, description}:IRequest): void {
        const specificationAlreadyExists = this.specificationRepository.findByName(name)
        if(specificationAlreadyExists){
            throw new AppError("Specification already exists")
        }
        this.specificationRepository.create({
            name,
            description,
        })

    }
}

export { CreateSpecificationService }