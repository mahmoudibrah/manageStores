


const dataMethods = ["body" , "params" ]

export const validation = (schema)=> {

    return (req , res , next) => {

        const validationErr = []

        dataMethods.forEach(key => {
            if(schema[key]){
                const validationResult = schema[key].validate(req[key] , {abortEary : false})
                if(validationResult?.error?.details) {
                    validationErr.push(validationResult.error.details)
                }
            }
        })

        if(validationErr.length) return res.status(400).json({message : "validation error" , err : validationErr})
        next()
    }
}

/*
  /// basic code  (static)
    const validationResult = schema.body.validate(req.body , {abortEary : false})
    if(validationResult?.error?.details)   return res.status(400).json({message : "validation error" , err : validationErr})

 */