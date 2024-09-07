dotenv.config();
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
const { sign } = jwt;
export function signInToken(user) {
  return sign(
    { email: user.email, name: user?.name, _id: user?._id },
    process.env.JWT_SECRET,
    {
      expiresIn: "2d",
    }
  );
}

export const isAuth = async (req, res, next) => {
  const { authorization } = await req.headers;
  try {
    const token = authorization?.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).send({
      message: error.message,
    });
  }
};
