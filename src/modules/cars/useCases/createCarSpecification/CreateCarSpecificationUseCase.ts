import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { ISpecificationRepository } from "@modules/cars/repositories/ISpecificationRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

interface IRequest {
    car_id: string;
    specifications_id: string[];
}

@injectable()
class CreateCarSpecificationUseCase {

    constructor(
        @inject("CarsRepository")
        private carsRepository: ICarsRepository,
        @inject("SpecificationRepository")
        private specificationsRepository: ISpecificationRepository
    ){}

    async execute({ car_id, specifications_id }: IRequest): Promise<Car> {
        const carAlreadyExists = await this.carsRepository.findById(car_id);

        if(!carAlreadyExists) {
            throw new AppError("Car doesn't exists");
        }

        const specifications = await this.specificationsRepository.findByIds(specifications_id);

        carAlreadyExists.specifications = specifications;

        await this.carsRepository.create(carAlreadyExists);

        return carAlreadyExists;

    };
}

export { CreateCarSpecificationUseCase }