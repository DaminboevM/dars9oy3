import newUser from "../module/user.module.js"
import CustomError from "../utils/error.js"
import { Validation } from "../middleware/validation.js"
import sha256 from "sha256"
import jwt_s from "../utils/jwt.js"
import JWt from "jsonwebtoken"

class UserService {

    static async createUser(body, dataToken) {
        try {
            let { error } = Validation.registerScheme.validate(req.body)
            if (error) {
                return res.status(400).json({ message: error.message })
            }
        
            body.password = sha256(body.password)

            let user = await newUser.findOne({username:body.username})
            if(user) throw new CustomError(402,"Invalid usernmae !")
            await newUser.create(body)
            
            let payload = {
                _id: user._id,
                userIp: dataToken.userIp,
                userAgent: dataToken.userAgent,
            }

            return {
                refreshToken: JWt.sign(payload,process.env.JWT_SECRET,{expiresIn: process.env.JWT_ACC}),
                accessToken: JWt.sign(payload,process.env.JWT_SECRET,{expiresIn:process.env.JWT_REF})
            }
        } catch (error) {
            throw new CustomError(403, error.message)
        }
    }
    
    
    

    static async loginUser(body, dataToken) {
        try {


            let { error } = Validation.registerScheme.validate(req.body);

            if (error) {
                return res.status(400).json({ message: error.message });
            }
            
            let { username, password } = body

            let user = await newUser.findOne({ username, password: sha256(password) })

            if (!user) {
                throw new CustomError(404, "ername not found")
            }

            dataToken._id = user._id

            return {
                accessToken: jwt_s.sign(dataToken),
                refreshToken: jwt_s.sign(dataToken)
            }
        } catch (error) {
            throw new CustomError(403, error.message)
        }
    }

    

    static async userAll() {
        try {
            return await newUser.find()
            
        } catch (error) {
            throw new CustomError(500, "Interval Server Error !")
        }
    }
}

export default UserService
