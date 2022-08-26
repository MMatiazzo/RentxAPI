import { CreateCarUseCase } from "./CreateCarUseCase";
import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create Car", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
    });

    it("should be able to create a new car", async () => {
        const car = await createCarUseCase.execute({
            name: "Name Car",
            description: "description car",
            daily_rate: 100,
            license_plate: "123456789",
            fine_amount: 60,
            brand: "brand",
            category_id: "category",
        });

        expect(car).toHaveProperty("id");
    });

    it("should not be able to create a car with exists license plate", () => {
        expect(async () => {
            await createCarUseCase.execute({
                name: "Car1",
                description: "description car",
                daily_rate: 100,
                license_plate: "123456789",
                fine_amount: 60,
                brand: "brand",
                category_id: "category",
            });

            await createCarUseCase.execute({
                name: "Car2",
                description: "description car",
                daily_rate: 100,
                license_plate: "123456789",
                fine_amount: 60,
                brand: "brand",
                category_id: "category",
            });
        }).rejects.toBeInstanceOf(AppError);
    });

    it("should be able to create a car with available true by default", async () => {
        const car =  await createCarUseCase.execute({
            name: "Car Available",
            description: "description car",
            daily_rate: 100,
            license_plate: "12345678910",
            fine_amount: 60,
            brand: "brand",
            category_id: "category",
        });

        expect(car.available).toBe(true);

    });
});