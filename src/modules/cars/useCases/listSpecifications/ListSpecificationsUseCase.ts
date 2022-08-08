import { inject, injectable } from "tsyringe";
import { Specification } from "../../infra/typeorm/entities/Specification";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";


@injectable()
class ListSpecificationsUseCase {

    constructor(
        @inject("SpecificationRepository")
        private specificationRepository: ISpecificationRepository
    ){}

    async execute() : Promise<Specification[]> {
        const listSpecifications = await this.specificationRepository.list();
        
        return listSpecifications;
    }
}

export { ListSpecificationsUseCase }