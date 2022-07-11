import { CategoriesRepository } from "../../repositories/implementation/CategoriesRepository";
import { ListCategoryController } from "./ListCategoriesController";
import { ListCategoryUseCase } from "./ListCategoriesUseCase";

const listCategoryRepository = CategoriesRepository.getInstance();

const listCategoryUseCase = new ListCategoryUseCase(listCategoryRepository);

const listCategoryController = new ListCategoryController(listCategoryUseCase);

export { listCategoryController };
