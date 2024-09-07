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
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  name: {
    type: String,
  },
  billingAddress: {
    country: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
    apartment: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: false,
    },
    state: {
      type: String,
      required: false,
    },
  },
  shippingAddress: {
    country: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
    apartment: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: false,
    },
    state: {
      type: String,
      required: false,
    },
  },
  email: {
    type: String,
    index: { unique: true },
  },
  password: {
    type: String,
    required: true,
  },
  wishlist: [UserWishListSchema],
});

const User = model("User", UserSchema);

export default User;
