dotenv.config();
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
const { sign } = jwt;
export function signInToken(user) {
  return sign({ email: user.email, name: user?.name }, process.env.JWT_SECRET, { expiresIn: "2d" });
}
