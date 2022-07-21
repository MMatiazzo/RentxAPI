import { Specification } from "../../entities/Specification";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";


class ListSpecificationsUseCase {

    constructor(private specificationRepository: ISpecificationRepository){}

    execute() : Specification[] {
        const listSpecifications = this.specificationRepository.list();
        
        return listSpecifications;
    }
}

export { ListSpecificationsUseCase }