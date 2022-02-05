import { getRepository, Repository } from "typeorm";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUserRepository";

class UsersRepository implements IUsersRepository {
    private repository: Repository<User>

    constructor() {
        this.repository = getRepository(User)
    }
    async findById(id: string): Promise<User> {
        const user = await this.repository.findOne(id);
        return user
    }

    async findByEmail(email: string): Promise<User> {
        const user = await this.repository.findOne({email})
        return user
    }

    async create({
        driver_license,
        name,
        email,
        password,
    }: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            driver_license,
            name,
            email,
            password,
        })
        await this.repository.save(user)
    }

}

export { UsersRepository }