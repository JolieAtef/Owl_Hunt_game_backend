import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()


export const databaseConnection = async ()=>{
    await mongoose.connect(process.env.Db_url).then(()=>{
        console.log("database connected")
    }).catch((err)=>{
        console.log(err)
    })
}

