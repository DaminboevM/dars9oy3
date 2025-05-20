
import {Schema,model,Types} from "mongoose";


let categoryScheme = new Schema({
  name: {
    type: String,
    required: true,
  
  }
}, {
  strict: true,
  timestamps: true
});


let newCategoryModel = model("Category",categoryScheme)

export default newCategoryModel                                                                                                                  