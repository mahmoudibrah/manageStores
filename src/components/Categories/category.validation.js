
import joi from " joi"


export const  createCategory = {
    body : joi.object().required().keys({
        name : joi.string().required().messages({
            "any.required" : "plz send name",
            "string.empty" : "not allowed to be empty" 
        })
    })
}

export const  deleteCategory = {
    params : joi.object().required().keys({
        idCategory :  joi.string().min(24).max(24).required() 
    })
}




