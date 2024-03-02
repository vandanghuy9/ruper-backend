import { Schema, model } from "mongoose";
const productInStockSchema = new Schema({
  color: {
    type: String,
    required: false,
  },
  size: {
    type: String,
    required: false,
  },
  material: {
    type: String,
    required: false,
  },
  quantity: {
    type: Number,
    required: false,
  },
  imageUrl: {
    type: [String],
    required: true,
  },
});
const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
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
  keyword: {
    type: String,
    required: true,
  },
  children: {
    type: String,
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
  imageUrl: {
    type: [String],
    required: true,
  },
  stocks: [productInStockSchema],
  tags: [String],
  sku: {
    type: String,
    required: false,
  },
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
