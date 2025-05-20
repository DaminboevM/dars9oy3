import CategoryService from "../service/user.category.js";

class UserController {

    constructor() { }

    async createCategory(req, res, next) {
        try {
            const result = await CategoryService.createCategory(req.body)
            res.status(201).json(result)
        } catch (error) { 
            next(error)
        }
    }



    async getCategory(req, res, next) {
        try {
            const result = await CategoryService.ReadCategory()
            res.status(201).json(result)
        } catch (error) {
            next(error)
        }
    }

}

const CategoryController = new UserController()

export default CategoryController