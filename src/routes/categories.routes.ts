import { Router } from "express";
const multer = require("multer");
import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";
import { importCategorysController } from "../modules/cars/useCases/importCategory";

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