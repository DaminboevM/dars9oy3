    import Joi from "joi";

    export class Validation {

        static registerScheme = Joi.object({
            username: Joi.string().min(3).max(30).alphanum().required(),
            password: Joi.string().min(3).max(30).required(),
            role:String
         
        });
        
    }