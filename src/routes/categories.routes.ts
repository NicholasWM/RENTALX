import { Router } from "express";
const multer = require("multer");
import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController'
import { ImportCategoryController } from "../modules/cars/useCases/importCategory/Controller";
import { ListCategoriesController } from "../modules/cars/useCases/listCategories/ListCategoriesController";

const categoriesRoutes = Router()
const upload = multer({
    dest: './tmp',

})
const createCategoryController = new CreateCategoryController()
const importCategorysController = new ImportCategoryController()
const listCategoriesController = new ListCategoriesController()
categoriesRoutes.get('/', listCategoriesController.handle);

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.post('/import', upload.single('file'), importCategorysController.handle);

export { categoriesRoutes }