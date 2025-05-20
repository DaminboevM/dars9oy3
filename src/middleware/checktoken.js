    import JWT from "../utils/jwt.js";
    import userModel from "../module/user.module.js";
    import CustomError from "../utils/error.js";

    export default async (req, res, next) => {
      try {
        let { token } = req.headers;
        if (!token) throw new CustomError(404, "Token is required");

        
                

        let { userIp, userAgent, _id } = JWT.verify(token, process.env.JWT_SECRET);

       
        
        let user = await userModel.findById(_id)

        
        if (!user) {
          throw new CustomError(404, "User not found jadval");
        }
      
        if (req.ip !== userIp || req.headers['user-agent'] !== userAgent) {
          throw new CustomError(402, "User create live")
        }

        req.user = user
        next();
      } catch (error) {
        console.log(error);

        if (error.name === "TokenExpiredError") {
          return next(new CustomError(404, "Token expired!"));
        }

        if (error.name === "JsonWebTokenError") {
          return next(new CustomError(400, "Invalid token"));
        }

        next(error);
      }
    };
