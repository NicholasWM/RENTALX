import { getRepository, Repository } from "typeorm";
import { Specification } from "../../entities/Specification";
import { ICreateSpecificationsRepository, ISpecificationsRepository } from "../ISpecificationsRepository";

class SpecificationRepository implements ISpecificationsRepository {
    private repository: Repository<Specification>

    constructor() {
        this.repository = getRepository(Specification)
    }

    async create({ name, description }: ICreateSpecificationsRepository): Promise<void> {
        const specification = this.repository.create({
            description,
            name,
            created_at: new Date()
        })
        await this.repository.save(specification)

    }
    async findByName(name: string): Promise<Specification> {
        return await this.repository.findOne({
            where:{
                name
            }
        })   
    }

    async list(): Promise<Specification[]>{
        return this.repository.find()
    }
}

export { SpecificationRepository }