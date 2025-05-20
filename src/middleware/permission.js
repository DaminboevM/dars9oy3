import User from "../module/user.module.js"
import Permission from "../module/permission.module.js"

async function checkPermission(req, res, next) {
  try {
    const username = req.user?.username
    if (!username) return res.status(401).json({ message: "Username mavjud emas" })

    const user = await User.findOne({ username })
    if (!user) return res.status(404).json({ message: "User topilmadi" })

    if (user.role === "superadmin") return next()

    const resource = req.url.split("/")[1]
    const action = req.method

    const permission = await Permission.findOne({ username, resource })
    if (!permission || !permission.actions.includes(action)) {
      
    }

    next()
  } catch (error) {
    res.status(500).json({ message: "Server xatosi", error: error.message })
  }
}

export default checkPermission