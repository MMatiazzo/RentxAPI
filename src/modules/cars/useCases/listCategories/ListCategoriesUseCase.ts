import { inject, injectable } from "tsyringe";
import { Category } from "@modules/cars/entities/Category";
import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";

@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoryRepository: ICategoriesRepository
  ) {}

  async execute(): Promise<Category[]> {
    const listCategories = await this.categoryRepository.list();

    return listCategories;
  }
}

export { ListCategoriesUseCase };
