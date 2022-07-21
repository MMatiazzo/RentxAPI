import { CategoriesRepository } from "../../repositories/implementation/CategoriesRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

export default () => {
  const categoryRepository = new CategoriesRepository();
  
  const importCategoryUseCase = new ImportCategoryUseCase(categoryRepository);
  
  const importCategoryController = new ImportCategoryController(
    importCategoryUseCase
  );

  return importCategoryController;
}

