import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { signInToken } from "../config/auth.js";
const { hashSync, compareSync } = bcrypt;
const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ name: username });
    if (user && password) {
      if (compareSync(password, user.password)) {
        const token = signInToken(user);
        const { _id, name, email } = user;
        console.log(user);
        return res.status(200).send({ token, _id, name, email });
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

export { login };
