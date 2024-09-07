import express from "express";
import {
  login,
  getUserAddress,
  updateUserInfo,
} from "../controller/userController.js";
import { isAuth } from "../config/auth.js";
const userRouter = express.Router();
userRouter.post("/login", login);
userRouter.post("/update", isAuth, updateUserInfo);
userRouter.get("/address", isAuth, getUserAddress);
export default userRouter;
