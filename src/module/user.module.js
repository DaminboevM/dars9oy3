
import {Schema,model,Types} from "mongoose";


let UserScheme = new Schema({

    username:{type:String,unique:true},
    password:String,
    role:{type:String,default:"User"}
  

},{strict:true})

let newUser = model("student",UserScheme)

export default newUser                                                                                                                  