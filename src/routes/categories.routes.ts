import { Router } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { CreateCategoriesService } from "../services/CreateCategoryService";

const categoriesRoutes = Router()
const categoriesRepository = new CategoriesRepository

categoriesRoutes.get('/', (req, res)=>{
    const all = categoriesRepository.list();
    return res.json(all);
});

categoriesRoutes.post('/', (req, res)=>{
    const {name, description} = req.body
    const createCategoryService = new CreateCategoriesService(categoriesRepository)
    createCategoryService.execute({name, description})
    return res.status(201).send()
});

export {categoriesRoutes}