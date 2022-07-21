import { CategoriesRepository } from "../../repositories/implementation/CategoriesRepository";
import { ListCategoryController } from "./ListCategoriesController";
import { ListCategoryUseCase } from "./ListCategoriesUseCase";

export default() => {
    const listCategoryRepository = new CategoriesRepository();
    
    const listCategoryUseCase = new ListCategoryUseCase(listCategoryRepository);
    
    const listCategoryController = new ListCategoryController(listCategoryUseCase);

    return listCategoryController;
}
