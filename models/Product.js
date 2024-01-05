import { Schema, model } from "mongoose";

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  parent: {
    type: String,
    required: true,
  },
  children: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: [String],
    required: true,
  },
  originalPrice: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  productClass: {
    type: String,
    required: false,
  },
  stocks: [{}],
  tags: [String],
  comment: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      date: {
        type: String,
        required: true,
      },
    },
  ],
});

const Product = model("Product", productSchema);

export default Product;
