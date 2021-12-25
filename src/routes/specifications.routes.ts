import { Router } from "express";
import { SpecificationRepository } from "../entities/cars/repositories/implementations/SpecificationRepository";
import { CreateSpecificationService } from "../entities/cars/services/CreateSpecificationService";
import { createSpecificationController } from "../entities/cars/useCases/createSpecification";
import { CreateSpecificationController } from "../entities/cars/useCases/createSpecification/CreateSpecificationController";
import { listSpecificationsController } from "../entities/cars/useCases/listSpecifications";

const specificationsRoutes = Router()

specificationsRoutes.get('/', (req, res)=>{
    return listSpecificationsController.handle(req, res)
});

specificationsRoutes.post('/', (req, res)=>{
    return createSpecificationController.handle(req,res);
});

export {specificationsRoutes}