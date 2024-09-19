import { Schema, model } from "mongoose";

const couponSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    discountType: {
      type: {
        type: String,
        enum: ["percentage", "fixed"],
      },
      value: {
        type: Number,
      },
    },
    startDate: {
      type: Date,
    },
    expiryDate: {
      type: Date,
      required: true,
    },
    usageLimit: {
      type: Number,
      default: 1,
    },
    status: {
      type: String,
      enum: ["show", "hide"],
    },
    minimumAmount: {
      type: Number,
    },
  },
  { timestamps: true }
);
const Coupon = model("Coupon", couponSchema);
export default Coupon;
