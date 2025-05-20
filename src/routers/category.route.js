import { Router } from "express";
import checktoken from "../middleware/checktoken.js";
import CategoryController from "../controller/Category.controller.js";
import checkPermission from "../middleware/permission.js";

let categoryRouter = Router()

categoryRouter.post("/create",checktoken,checkPermission,CategoryController.createCategory)
categoryRouter.get("/read",checktoken,checkPermission, CategoryController.getCategory)

export default categoryRouter