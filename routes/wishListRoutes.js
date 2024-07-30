import express from "express";
import { getWishListByUserId, addProductToWishList } from "../controller/userController.js";
const wishListRouter = express.Router();
wishListRouter.get("/", getWishListByUserId);
wishListRouter.post("/add", addProductToWishList);
export default wishListRouter;
