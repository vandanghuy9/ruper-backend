import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    index: { unique: true },
  },
  password: {
    type: String,
    required: true,
  },
  name: String,
});

const User = model("User", UserSchema);

export default User;
