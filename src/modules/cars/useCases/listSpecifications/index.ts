import { SpecificationRepository } from "../../repositories/implementation/SpecificationRepository";
import { ListSpecificationController } from "./ListSpecificationController";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

const specificationRepository = SpecificationRepository.getInstance();

const listSpecificationUseCase = new ListSpecificationsUseCase(specificationRepository);

const listSpecificationController = new ListSpecificationController(listSpecificationUseCase);

export { listSpecificationController }