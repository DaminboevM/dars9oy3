import newService from "../service/user.service.js"

class UserController {
  constructor() {}

  async register(req, res, next) {
    try {
      const dataToken = {
        userIp: req.ip,
        userAgent: req.headers["user-agent"]
      }

      const data = await newService.createUser(req.body, dataToken)  
  
      res.status(201).json({ data })
    } catch (error) {
      console.log(error)
      next(error)
    }
  }
  

  async login(req, res, next) {
    try {
      const dataToken = {
        userIp: req.ip,
        userAgent: req.headers["user-agent"]
      }

      const data = await newService.loginUser(req.body, dataToken)
      res.status(201).json({ data })

    } catch (error) {
      console.log(error)
      next(error)
    }
  }



  async getAll(req, res, next) {
    try {

      const data = await newService.userAll()
      res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }
}

const userController = new UserController()

export default userController
