import JWT from "jsonwebtoken";

export default {
  sign: (payload) =>JWT.sign({ username: payload.username }, process.env.JWT_SECRET,{ expiresIn: process.env.JWT_ACC }),
  signRef: (payload) =>JWT.sign({ username: payload.username },process.env.JWT_SECRET,{ expiresIn: process.env.JWT_REF }),
  verify: (token) =>JWT.verify(token, process.env.JWT_SECRET) ,
};