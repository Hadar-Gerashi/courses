import express from 'express'

import {getAllUser,getUserById,addUser,updateUser,updatePassword,logIn} from '../controllers/user.js'

const router=express.Router();

router.get("/",getAllUser)
router.get("/:id",getUserById)
router.post("/",addUser)
router.put("/:id",updateUser)
router.put("/password/:id",updatePassword)
router.post("/logIn",logIn)

export default router