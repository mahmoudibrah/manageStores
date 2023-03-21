




import asyncHandler from "express-async-handler";
import sql from "../../db/connectionDB.js";




/// Create Store 
export const createStore = asyncHandler( async (req, res, next) => {
    const {name , website , categoryId } = req.body

    const query = `insert into stores (name , website , category_id)  values ('${name}' , '${website}' , '${categoryId}')`


    // insert new store in database
    sql.query(query , (err, results, fields)=> {
        if(err) return res.status(500).json({message: "error create store" , err})
        return  res.status(201).json({message: "Done" , results})
    })

});




// Get all stores in category

export const getAllStoresInCategory = asyncHandler( async (req, res, next) => {
    const { idCategory } = req.params
 
    const query = `select * from stores where category_id = ${idCategory}`
    sql.query(query , (err, results, fields)=> {
        if(err) return res.status(500).json({message: "erorr retrieve stores" , err})
        return  res.status(200).json({message: "Done" , results})
    })
});



/*
    // basic validation
    if(!name || !website || !categoryId) return res.json({message: "required fields"})
    if (!idCategory) return res.status(400).json({ error: 'Invalid category ID' });
*/
 



