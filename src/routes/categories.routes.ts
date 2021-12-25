import { Router } from "express";
const multer = require("multer");
import { createCategoryController } from "../entities/cars/useCases/createCategory";
import { listCategoriesController } from "../entities/cars/useCases/listCategories";
import { importCategorysController } from "../entities/cars/useCases/importCategory";

const categoriesRoutes = Router()
const upload = multer({
    dest: './tmp',

})
categoriesRoutes.get('/', (req, res) => {
    return listCategoriesController.handle(req, res)
});

categoriesRoutes.post('/', (req, res) => {
    return createCategoryController.handle(req, res)
});

categoriesRoutes.post('/import', upload.single('file'), (req, res) => {
    return importCategorysController.handle(req, res)
});

export { categoriesRoutes }