import { container } from "tsyringe";

import "@shared/container/providers";

import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";
import { CategoriesRepository } from "@modules/cars/infra/typeorm/repositories/CategoriesRepository";
import { ISpecificationRepository } from "@modules/cars/repositories/ISpecificationRepository";
import { SpecificationRepository } from "@modules/cars/infra/typeorm/repositories/SpecificationRepository";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { CarsRepository } from "@modules/cars/infra/typeorm/repositories/CarsRepository";
import { ICarsImageRepository } from "@modules/cars/repositories/ICarsImageRepository";
import { CarsImageRepository } from "@modules/cars/infra/typeorm/repositories/CarsImageRepository";
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";
import { RentalsRepository } from "@modules/rentals/infra/typeorm/repositories/RentalsRepository";
import { IUsersTokensRepository } from "@modules/accounts/repositories/IUsersTokensRepository";
import { UsersTokensRepository } from "@modules/accounts/infra/typeorm/repositories/UsersTokenRepository";

container.registerSingleton<ICategoriesRepository> (
    "CategoriesRepository", 
    CategoriesRepository
);

container.registerSingleton<ISpecificationRepository> (
    "SpecificationRepository",
    SpecificationRepository
);

container.registerSingleton<IUsersRepository> (
    "UsersRepository",
    UsersRepository
);

container.registerSingleton<ICarsRepository> (
    "CarsRepository",
    CarsRepository
);

container.registerSingleton<ICarsImageRepository> (
    "CarsImageRepository",
    CarsImageRepository
);

container.registerSingleton<IRentalsRepository> (
    "RentalsRepository",
    RentalsRepository
);

container.registerSingleton<IUsersTokensRepository> (
    "UsersTokensRepository",
    UsersTokensRepository
);