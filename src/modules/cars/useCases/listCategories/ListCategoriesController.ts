import { Request, Response } from "express";

import { ListCategoryUseCase } from "./ListCategoriesUseCase";

class ListCategoryController {
  constructor(private listCategoryUseCase: ListCategoryUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const listCategories = await this.listCategoryUseCase.execute();
    return response.json(listCategories);
  }
}

export { ListCategoryController };
