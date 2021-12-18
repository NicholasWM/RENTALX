import { Specification } from "../model/Specification";

interface ICreateSpecificationsRepository{
    name: string,
    description: string,
}

interface ISpecificationsRepository {
    findByName(name: string): Specification,
    create({name, description}:ICreateSpecificationsRepository): void,
    list(): Specification[],
}

export { ICreateSpecificationsRepository, ISpecificationsRepository }