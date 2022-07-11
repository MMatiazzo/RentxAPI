import { Category } from "../../model/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ListCategoryUseCase {
  constructor(private categoryRepository: ICategoriesRepository) {}

  execute(): Category[] {
    const listCategories = this.categoryRepository.list();

    return listCategories;
  }
}

export { ListCategoryUseCase };
