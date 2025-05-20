import CustomError from "../utils/error.js"
import newCategoryModel from "../module/category.module.js"

class CategoryService {

    static async createCategory(body) {
        try {
            return await newCategoryModel.create({name:body.name})

        } catch (error) {
            throw new CustomError(403, error.message)  
            
        }   
    }


    static async ReadCategory() {
        try {
            return await newCategoryModel.find()

        } catch (error) {
            throw new CustomError(403, error.message)  
        }   
    }

}
    
export default CategoryService