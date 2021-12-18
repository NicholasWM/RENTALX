import { Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/SpecificationRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationsRoutes = Router()
const specificationsRepository = new SpecificationRepository

specificationsRoutes.get('/', (req, res)=>{
    const all = specificationsRepository.list();
    return res.json(all);
});

specificationsRoutes.post('/', (req, res)=>{
    const {name, description} = req.body
    const createSpecificationsService = new CreateSpecificationService(specificationsRepository)
    createSpecificationsService.execute({name, description})
    return res.status(201).send()
});

export {specificationsRoutes}