import { Specification } from "../model/Specification";
import { ICreateSpecificationsRepository, ISpecificationsRepository } from "./ISpecificationsRepository";

class SpecificationRepository implements ISpecificationsRepository {
    private specifications: Specification[]

    constructor(parameters) {
        this.specifications = []
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