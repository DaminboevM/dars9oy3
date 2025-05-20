
import {Schema,model} from "mongoose";


let permissionScheme = new Schema({

    user_id:{type:Schema.Types.ObjectId,ref:"User"},
    actions:[String],
    permissionModel:String
  

},{strict:true})

let newPermissionScheme = model("Permission",permissionScheme)

export default newPermissionScheme                                                                                                                 