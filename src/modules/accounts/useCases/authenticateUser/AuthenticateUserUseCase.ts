import { compare } from "bcryptjs";
import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUserRepository";
import { sign } from 'jsonwebtoken'
import { AppError } from "../../../../errors/AppError";
interface IRequest{
    email: string,
    password:string
}

interface IResponse{
    user: {
        name: string,
        email: string,
    },
    token: string
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({email, password}:IRequest): Promise<IResponse> {
        const user = await this.usersRepository.findByEmail(email)
        if(!user){
            throw new AppError('Email or password incorrect!')
        }
        //     const passwordHash = await hash(password, 8)
        if(!await compare(password, user.password)){
            throw new AppError('Email or password incorrect!')
        }
        const token = sign({}, "secret", {
            subject: user.id,
            expiresIn:"1d"
        })
        const tokenReturn: IResponse = {
            token,
            user:{
                email: user.email,
                name: user.name
            }
        }
        return tokenReturn
    }
}

export { AuthenticateUserUseCase }