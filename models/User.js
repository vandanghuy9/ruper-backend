import { Schema, model } from "mongoose";
const UserWishListSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

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
  wishlist: [UserWishListSchema],
});

const User = model("User", UserSchema);

export default User;
