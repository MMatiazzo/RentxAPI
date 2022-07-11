import { Request, Response } from "express";

import { ListCategoryUseCase } from "./ListCategoriesUseCase";

class ListCategoryController {
  constructor(private listCategoryUseCase: ListCategoryUseCase) {}
  handle(request: Request, response: Response): Response {
    const listCategories = this.listCategoryUseCase.execute();
    return response.json(listCategories);
  }
}

export { ListCategoryController };
