import { Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/implementations/SpecificationRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";
import { listSpecificationsController } from "../modules/cars/useCases/listSpecifications";

const specificationsRoutes = Router()

specificationsRoutes.get('/', (req, res)=>{
    return listSpecificationsController.handle(req, res)
});

specificationsRoutes.post('/', (req, res)=>{
    return createSpecificationController.handle(req,res);
});

export {specificationsRoutes}