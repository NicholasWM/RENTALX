import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUserRepository";
import { hash } from "bcryptjs";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {

    }
    async execute({ password, email, driver_license, name }: ICreateUserDTO): Promise<void> {
        const userAlreadyExists = await this.usersRepository.findByEmail(email)
        if(userAlreadyExists){
            throw new AppError('User already exists')
        }
        const passwordHash = await hash(password, 8)
        await this.usersRepository.create({ password: passwordHash, email, driver_license, name })
    }
}

export { CreateUserUseCase }