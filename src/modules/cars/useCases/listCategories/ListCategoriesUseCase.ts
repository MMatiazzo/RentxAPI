import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ListCategoryUseCase {
  constructor(private categoryRepository: ICategoriesRepository) {}

  async execute(): Promise<Category[]> {
    const listCategories = await this.categoryRepository.list();

    return listCategories;
  }
}

export { ListCategoryUseCase };
