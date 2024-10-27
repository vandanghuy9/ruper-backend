dotenv.config();
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
const { sign, verify } = jwt;
export function signInToken(user) {
  return sign(
    { email: user.email, name: user?.name, _id: user?._id },
    process.env.JWT_SECRET,
    {
      expiresIn: "2d",
    }
  );
}

export const tokenForVerify = (info) => {
  return sign(
    { email: info.email, password: info?.password },
    process.env.JWT_SECRET,
    {
      expiresIn: "15m",
    }
  );
};

export const tokenForForgotPassword = (info) => {
  return sign({ _id: info._id, email: info.email }, process.env.JWT_SECRET, {
    expiresIn: 900,
  });
};

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

export const getUserInfoByToken = (token) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded;
};
