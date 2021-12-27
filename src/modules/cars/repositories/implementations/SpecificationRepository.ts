import { Specification } from "../../entities/Specification";
import { ICreateSpecificationsRepository, ISpecificationsRepository } from "../ISpecificationsRepository";

class SpecificationRepository implements ISpecificationsRepository {
    private specifications: Specification[]
    private static INSTANCE: SpecificationRepository

    private constructor() {
        this.specifications = []
    }
    
    public getInstance(){
        if(!SpecificationRepository.INSTANCE){
            SpecificationRepository.INSTANCE = new SpecificationRepository()
        }
        return SpecificationRepository.INSTANCE
    }

    create({ name, description }: ICreateSpecificationsRepository): void {
        const specification = new Specification()

        Object.assign(specification, {
            description,
            name,
            created_at: new Date()
        })
        this.specifications.push(specification)
    }
    findByName(name: string): Specification {
        return this.specifications.find(specification => specification.name == name)   
    }

    list(): Specification[]{
        return this.specifications
    }
}

export { SpecificationRepository }