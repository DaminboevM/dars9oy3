
import {Schema,model,Types} from "mongoose";


let permissionScheme = new Schema({

    user_id:{type:Schema.Types.ObjectId,ref:"student"},
    actions:[String],
    permissionModel:String
  

},{strict:true})

let newPermissionScheme = model("Permission",permissionScheme)

export default newPermissionScheme                                                                                                                 