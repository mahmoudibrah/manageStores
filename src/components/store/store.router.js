

import { Route } from "express";
import {  createStore, getAllStoresInCategory } from "./store.service.js";
import * as validators from "./store.validation.js"
import validation from "../../middleware/validation.js"
const router = Route()

router.post("/" , validation(validators.createStore) , createStore)
router.get("/:idCategory" , validation(validators.getAllStoresInCategory) ,getAllStoresInCategory)





export default router
