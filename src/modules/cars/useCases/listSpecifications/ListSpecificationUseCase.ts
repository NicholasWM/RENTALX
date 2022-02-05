import { inject, injectable } from "tsyringe";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository"

@injectable()
class ListSpecificationsUseCase {
    constructor(
        @inject("SpecificationRepository")
        private specificationsRepository: ISpecificationsRepository
    ){}
    async execute() {
        const specifications = await this.specificationsRepository.list();
        return specifications
    }
}

export { ListSpecificationsUseCase }