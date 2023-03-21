import asyncHandler from "express-async-handler";
import sql from "../../db/connectionDB.js";


// add category
export const createCategory = asyncHandler(async (req, res, next) => {
    const { name } = req.body
    const query = `insert into categories (name) values ('${name}')`
    sql.query(query , (err, results, fields)=> {
        if(err) return res.status(500).json({message: "error create catgory" , err})
        return  res.status(201).json({message: "Done" , results})
    })
});


// get all catgory

export const allCategories = asyncHandler(async (req, res, next) => {
    const query = `select * from categories`
    sql.query(query , (err, results, fields)=> {
        if(err) return res.status(500).json({message: "error retrieve categories" , err})
        return  res.status(201).json({message: "Done" , results})
    })
});


export const deleteCategory =  asyncHandler(async (req, res, next) => {
    const {idCategory} = req.params
    const query = `delete from categories where id = ${idCategory}`
    sql.query(query , (err, results, fields)=> {
        if(err) return res.status(500).json({message: "faild delete category" , err})
        return  res.status(201).json({message: "Done" , results})
    })
});

