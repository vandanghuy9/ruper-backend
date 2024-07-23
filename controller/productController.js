import Product from "../models/Product.js";

const getShowProducts = async (req, res) => {
  try {
    const products = await Product.find(
      {},
      "name productClass imageUrl price discount parent children brand description comment"
    );
    console.log(products);
    return res.status(200).send(products);
  } catch (e) {
    return res.status(500).json({
      message: e.message,
    });
  }
};

const getProductById = async (req, res) => {
  try {
    const { _id } = req.params;
    const product = await Product.findById(_id);
    return res.status(200).send(product);
  } catch (e) {
    return res.status(500).json({
      message: e.message,
    });
  }
};

const getRelatedProducts = async (req, res) => {
  try {
    const products = await Product.find(
      {},
      "name productClass imageUrl price discount parent children brand description comment"
    );
    return res.status(200).send(products);
  } catch (e) {
    return res.status(500).json({
      message: e.message,
    });
  }
};

const getProductsByCategory = async (req, res) => {
  try {
    const category = req.query?.category;
    const brand = req.query?.brand;
    const price = req.query?.price;
    const size = req.query?.size;
    const sort = req.query?.sort;
    let query = {};
    if (category) {
      query.keyword = category;
    }
    if (brand) {
      query.brand = brand;
    }
    let sortOption = { sort: {} };
    switch (sort) {
      case "PRICE_LOW_TO_HIGH": {
        sortOption.sort["price"] = 1;
        break;
      }
      case "PRICE_HIGH_TO_LOW": {
        sortOption.sort["price"] = -1;
        break;
      }
      case "POPULARITY": {
        sortOption.sort["productClass"] === "Hot";
        break;
      }
      default: {
      }
    }
    let products = await Product.find(
      query,
      "name productClass imageUrl price discount parent children brand description comment",
      sortOption
    );
    if (price) {
      products = products.filter((item) => (item.price * item.discount) / 100 <= price);
    }
    if (size) {
      products = products.filter((item) => item.stocks.find((i) => i.size === size) !== null);
    }
    return res.status(200).send([...products]);
  } catch (e) {
    return res.status(500).json({
      message: e.message,
    });
  }
};

const getFeatureProducts = async (req, res) => {
  try {
    const products = await Product.find(
      { productClass: "Hot" },
      "name productClass imageUrl price discount parent children brand description comment"
    ).limit(3);
    return res.status(200).send(products);
  } catch (e) {
    return res.status(500).json({
      message: e.message,
    });
  }
};
export {
  getShowProducts,
  getProductById,
  getRelatedProducts,
  getProductsByCategory,
  getFeatureProducts,
};
