import { userModel } from "../../database/models/user.model.js";



export const register = async(req ,res)=>{
    let {name , level} = req.body
    let addedUser = await userModel.insertMany({name , level})
    if(addedUser){
        res.json({message:"let's play", addedUser})
    }else{
        res.json({message:"something went wrong"})
    }
}


export const setScore = async(req,res)=>{
     let {id}= req.params
     let {score} = req.body
     let user = await userModel.findById(id)
     if(!user){
       return res.json({message:"user not found"})
     }
     user.score=score
     await user.save()
     res.json({message:"score set successfully"})
}


export const topFive = async (req ,res)=>{
    let data = await userModel.find().sort({score: -1}).limit(5)
    if(data.length>0){
        res.json({message:"top five",data})
    }else{
        res.json({message:"no users found"})
    }
}