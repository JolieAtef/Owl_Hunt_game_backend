import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    level:{
        type:String,
        enum:["easy", "medium", "hard"],
        required:true
    },
    score:{
        type:Number,
        default:0
    }
})


export const userModel = mongoose.model("users",userSchema)