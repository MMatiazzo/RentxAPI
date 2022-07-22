import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

class ListSpecificationController {

    async handle(request:Request, response:Response) :Promise<Response> {

        const listSpecificationUseCase = container.resolve(ListSpecificationsUseCase);

        const listSpecifications = await listSpecificationUseCase.execute();

        return response.json(listSpecifications);
    }
}

export { ListSpecificationController }