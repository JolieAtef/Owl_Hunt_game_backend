import express from "express"
import { databaseConnection } from "./database/connection.js"
import userRouter from "./modules/user/user.controller.js"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

export const bootstrap = ()=>{
    const app = express()
    
    app.use(
        cors({
            // origin: process.env.Frontend_domain
            origin:"*"
        })
    )
    
    app.use(express.json())
    databaseConnection()
    app.use("/users",userRouter)
    

    app.listen(3000,()=>{
        console.log("server running on port 3000")
    })
} 