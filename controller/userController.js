import User from "../models/User.js";
import {
  sendVerifyEmail,
  sendPasswordRecoverEmail,
} from "../utils/mailer/sender.js";
import bcrypt from "bcryptjs";
import {
  signInToken,
  tokenForVerify,
  getUserInfoByToken,
  tokenForForgotPassword,
} from "../config/auth.js";
import mongoose from "mongoose";
const { compareSync, hashSync } = bcrypt;
const login = async (req, res) => {
  const { username, password, email } = req.body;
  try {
    const user = await User.findOne({
      $or: [{ name: username }, { email }],
    }).populate("wishlist.product");
    if (user && password) {
      if (compareSync(password, user.password)) {
        const token = signInToken(user);
        const { _id, email, wishlist } = user;
        return res.status(200).send({
          token,
          _id,
          name: user.name ? user.name : user.email.split("@")[0],
          email,
          wishlist,
        });
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
      user?.wishlist?.push({
        product,
        date: date.toString().replaceAll(",", " "),
      });
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
      return res.status(200).json({
        message: "Deleted from wishlist successfully",
        wishlist: user.wishlist,
      });
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

const getUserAddress = async (req, res) => {
  try {
    const { _id } = req.user;
    const user = await User.findById(_id).lean();
    if (user) {
      const {
        billingAddress,
        shippingAddress,
        name,
        firstName,
        lastName,
        email,
      } = user;
      return res.status(200).send({
        billingAddress,
        shippingAddress,
        name,
        firstName,
        lastName,
        email,
      });
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

const updateUserInfo = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      displayName,
      email,
      password,
      newPassword,
      confirmPassword,
    } = req.body;
    const { _id } = req.user;
    if (!checkValidObjectId(_id)) {
      return res.status(400).send("Invalid user");
    }

    const user = await User.findById(_id);
    const list = await User.find({});
    if (user) {
      if (firstName !== user.firstName) {
        user.firstName = firstName;
      }
      if (lastName !== user.lastName) {
        user.lastName = lastName;
      }
      if (displayName !== user.name) {
        user.name = displayName;
      }
      if (email !== user.email) {
        user.email = email;
      }
      if (newPassword !== "" && confirmPassword !== "") {
        if (password !== "") {
          return res.status(200).json({
            ok: false,
            message: "Please enter your current password",
          });
        }
        if (!compareSync(password, user.password)) {
          return res.status(200).json({
            ok: false,
            message: "Wrong password",
          });
        }
        if (newPassword !== confirmPassword) {
          return res.status(200).json({
            ok: false,
            message: "Wrong confirm password",
          });
        }
        const hashedPassword = hashSync(newPassword);
        user.password = hashedPassword;
      }
      await user.save();
      return res.status(200).json({
        ok: true,
        message: "Update user successfully",
      });
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
const verifyEmailAddress = async (req, res) => {
  const { email, password } = req?.body;
  const user = await User.findOne({ email });
  if (user) {
    return res.status(403).send({ message: "This Email already Added!" });
  }
  const token = tokenForVerify({ email, password });
  try {
    sendVerifyEmail({ email, token }, res);
  } catch (error) {
    return res.status(403).send({ message: error });
  }
};

const register = async (req, res) => {
  const { token } = req.body;
  try {
    const { email, password } = getUserInfoByToken(token);
    const hashedPassword = hashSync(password);
    const newUser = new User({
      email,
      password: hashedPassword,
    });
    await newUser.save();
    return res
      .status(201)
      .send({ message: "Registered successfully, please login" });
  } catch (e) {
    return res
      .status(401)
      .send({ message: "Token Expired, Please try again!" });
  }
};

const forgotPassword = async (req, res) => {
  const { userLogin } = req.body;
  try {
    const user = await User.findOne({
      $or: [{ name: userLogin }, { email: userLogin }],
    });
    if (!user) {
      return res.status(401).send({
        message: "Your account can't be found !",
      });
    }
    const token = tokenForForgotPassword({
      email: user.email,
      _id: user._id,
    });
    sendPasswordRecoverEmail({ email: user.email, token }, res);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const recoverPassword = async (req, res) => {
  const { token, newPassword, confirmPassword } = req.body;
  try {
    const decoded = getUserInfoByToken(token.toString());
    const { email, _id, ...rest } = decoded;
    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).send({
        message: "Your account can't be found !",
      });
    }
    if (newPassword !== confirmPassword) {
      return res.status(403).send({
        message: "New Password and Confirm Password do not match !",
      });
    }
    const hashedPassword = hashSync(newPassword);
    user.password = hashedPassword;
    await user.save();
    return res
      .status(201)
      .send({ message: "Change password successfully, please login again !" });
  } catch (e) {
    return res.status(401).send({ message: e.message });
  }
};
export {
  login,
  getWishListByUserId,
  addProductToWishList,
  removeProductFromWishList,
  getUserAddress,
  updateUserInfo,
  verifyEmailAddress,
  register,
  forgotPassword,
  recoverPassword,
};
