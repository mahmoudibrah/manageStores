process.on("uncaughtException", (err)=> {
    console.log("uncaughtException" ,err );
})

import dotenv from "dotenv";
dotenv.config();
import express from "express";

import cors from "cors";
const app = express();
const port = process.env.port;
import * as indexRouter from "./src/indexRouter.js"


const baseURL = process.env.baseURL

app.use(express.json());
app.use(cors());


app.use(`${baseURL}/store` , indexRouter.store)
app.use(`${baseURL}/category` , indexRouter.categories)

app.get("/", (req, res) => res.send("Hello World!"));
app.use("*", (req, res) => {
  res.json({ message: "in-valid router" });
});
app.listen(port, () => console.log(`server is running on port...... ${port}!`));



// any error outside express 
process.on("unhandledRejection" , (err)=> {
    console.log("unhandledRejection" , err);
})