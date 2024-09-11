import express from "express";
import {
  login,
  getUserAddress,
  updateUserInfo,
  verifyEmailAddress,
  register,
  forgotPassword,
  recoverPassword,
} from "../controller/userController.js";
import { isAuth } from "../config/auth.js";
const userRouter = express.Router();
userRouter.post("/login", login);
userRouter.post("/update", isAuth, updateUserInfo);
userRouter.post("/verify", verifyEmailAddress);
userRouter.post("/register", register);
userRouter.post("/forgot-password", forgotPassword);
userRouter.post("/recover", recoverPassword);
userRouter.get("/address", isAuth, getUserAddress);
export default userRouter;
