import { Router } from "express";
import PermissionTekshirish from "../middleware/permission.js";
import checktoken from "../middleware/checktoken.js"
import userController from "../controller/user.controller.js";
let userRouter = Router()

userRouter.post("/register",userController.register)
userRouter.post("/login",userController.login)
userRouter.get("/get",checktoken,PermissionTekshirish,userController.getAll)

export default userRouter