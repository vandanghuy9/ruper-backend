import User from "../models/User.js";
import Product from "../models/Product.js";
import bcrypt from "bcryptjs";
import { signInToken } from "../config/auth.js";
import mongoose from "mongoose";
const { hashSync, compareSync } = bcrypt;
const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ name: username }).populate("wishlist.product");
    if (user && password) {
      if (compareSync(password, user.password)) {
        const token = signInToken(user);
        const { _id, name, email, wishlist } = user;
        console.log(user);
        return res.status(200).send({ token, _id, name, email, wishlist });
      }
    }
    return res.status(401).send({
      message: "Invalid user or password!",
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getWishListByUserId = async (req, res) => {
  try {
    const { _id } = req.user;
    const user = await User.findById(_id).populate("wishlist.product");
    if (user) {
      const { wishlist } = user;
      console.log("Wish list: " + wishlist);
      return res.status(200).send(wishlist);
    }
    return res.status(401).send({
      message: "Invalid user!",
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};
const checkValidObjectId = (id) => {
  return mongoose.Types.ObjectId.isValid(id);
};
const addProductToWishList = async (req, res) => {
  try {
    const { product } = req.body;
    const { _id } = req.user;
    console.log("product:" + product + "id " + _id);
    if (!checkValidObjectId(_id) || !checkValidObjectId(product)) {
      return res.status(400).send("Invalid user or product ID");
    }

    const user = await User.findById(_id);
    if (user) {
      let d = new Date();
      const offset = d.getTimezoneOffset();
      d = new Date(d.getTime() - offset * 60 * 1000);
      let date = d.toDateString().split(" ");
      const day = date.shift();
      user?.wishlist?.push({ product, date: date.toString().replaceAll(",", " ") });
      await user.save();
      return res.status(200).json({ message: "Add to wishlist successfully" });
    }
    return res.status(401).send({
      message: "Invalid user!",
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const removeProductFromWishList = async (req, res) => {
  try {
    const { product } = req.body;
    const { _id } = req.user;
    if (!checkValidObjectId(_id) || !checkValidObjectId(product)) {
      return res.status(400).send("Invalid user or product ID");
    }

    const user = await User.findById(_id);
    if (user) {
      user.wishlist = user?.wishlist?.filter(
        (item) => item.product.toString() !== product.toString()
      );
      await user.save();
      return res
        .status(200)
        .json({ message: "Deleted from wishlist successfully", wishlist: user.wishlist });
    }
    return res.status(401).send({
      message: "Invalid user!",
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};
export { login, getWishListByUserId, addProductToWishList, removeProductFromWishList };
