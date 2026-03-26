import express from "express"
import { register, setScore, topFive } from "./user.service.js"


let router = express.Router()

router.post("/start_game",register)

router.put("/set_score/:id", setScore)

router.get("/top_five",topFive)

export default router