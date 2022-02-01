import { Specification } from "../entities/Specification";

interface ICreateSpecificationsRepository{
    name: string,
    description: string,
}

interface ISpecificationsRepository {
    findByName(name: string): Promise<Specification>,
    create({name, description}:ICreateSpecificationsRepository): Promise<void>,
    list(): Promise<Specification[]>,
}

export { ICreateSpecificationsRepository, ISpecificationsRepository }