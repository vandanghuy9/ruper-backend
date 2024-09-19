import Product from "./models/Product.js";
import connectDB from "./config/db.js";
import productData from "./utils/productData.js";
import User from "./models/User.js";
import users from "./utils/userData.js";
import blogData from "./utils/blogData.js";
import couponData from "./utils/couponData.js";
import Blog from "./models/Blog.js";
import Coupon from "./models/Coupon.js";
connectDB();
const seedData = async () => {
  try {
    await Product.deleteMany();
    await Product.insertMany(productData);
    await User.deleteMany();
    await User.insertMany(users);
    await Blog.deleteMany();
    await Blog.insertMany(blogData);
    await Coupon.deleteMany();
    await Coupon.insertMany(couponData);
    console.log("data inserted successfully!");
    process.exit();
  } catch (e) {
    console.log(e);
    process.exit();
  }
};
seedData();
