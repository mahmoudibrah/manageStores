
import { Router } from "express";
import { allCategories, createCategory, deleteCategory } from './categories.service.js';
import { validation } from './../../middleware/validation.js';
import * as validator from "./category.validation.js"
const router = Router()

router.get("/" ,   allCategories)

router.post("/" ,  validation(validator.createCategory) ,createCategory)
router.delete("/:idCategory" ,  validation(validator.deleteCategory) ,deleteCategory  )



export default router

