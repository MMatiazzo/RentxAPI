import { Router } from "express";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";

import { CreateSpecificationController } from "@modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ListSpecificationController } from "@modules/cars/useCases/listSpecifications/ListSpecificationController";
import { ensureAdmin } from "../middlewares/ensureAdmin";

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
const listSpecificationController = new ListSpecificationController();

specificationRoutes.post(
    "/", 
    ensureAuthenticated,
    ensureAdmin,
    createSpecificationController.handle
);

specificationRoutes.get("/", listSpecificationController.handle);

export { specificationRoutes };
