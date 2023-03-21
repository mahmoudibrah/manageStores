
import joi from "joi"

export const createStore = {
    body : joi.object().required().keys({
        name : joi.string().required().messages({
            "any.required" : "plz send name",
            "string.empty" : "not allowed to be empty" 
        }),
        website : joi.string().required().messages({
            "any.required" : "plz send website",
            "string.empty" : "not allowed to be empty" 
        }),
        categoryId :  joi.string().min(24).max(24).required() 
    })
}

export const getAllStoresInCategory = {
    params : joi.object().required().keys({
        idCategory :  joi.string().min(24).max(24).required() 
    })
}