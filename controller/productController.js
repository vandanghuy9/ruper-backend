import Product from "../models/Product.js";

const getShowProducts = async (req, res) => {
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
    const page = req.query?.page || 1;
    const limit = req.query?.limit || 6;
    const offset = (page - 1) * limit;
    // console.log(category, brand, price, size, sort);
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
      "name productClass imageUrl price discount parent children brand description comment stocks",
      sortOption
    )
      .skip(offset)
      .limit(limit)
      .exec();
    if (price) {
      products = products.filter(
        (item) => (item.price * item.discount) / 100 <= price
      );
    }
    if (size) {
      products = products.filter(
        (item) => item.stocks.find((i) => i.size === size) !== null
      );
    }
    const totalItems = await Product.countDocuments({});
    const totalPages = Math.ceil(totalItems / limit);
    return res.status(200).json({ products, totalItems, totalPages, page });
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

const getCompareProducts = async (req, res) => {
  try {
    const productId = req?.query?.product;
    const product = await Product.findById(productId);
    if (!product) {
      return []; // Or handle error appropriately
    }

    const similarProducts = await Product.find({
      _id: { $ne: productId }, // Exclude the input product
      parent: product.parent,
      children: product.children,
    }).limit(2);
    return res.status(200).send([product, ...similarProducts]);
  } catch (e) {
    return res.status(500).json({
      message: e.message,
    });
  }
};

const saveProductReviews = async (req, res) => {
  try {
    const { productId, author, email, comment, rating } = req?.body;
    console.log(productId, author, email, comment, rating);
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(400).send({ message: "Can't find product" }); // Or handle error appropriately
    }

    if (product?.comment !== undefined) {
      const reviews = product?.comment;
      const currentRating = product?.rating;
      const updatedProduct = await Product.updateOne(
        {
          _id: productId,
        },
        {
          $push: { comment: { author, email, comment, rating } },
        },
        { new: true, upsert: true, multi: true }
      );
      console.log(updatedProduct);
      return res.status(200).json({ message: "Thank you for your review" });
    } else {
      const updatedProduct = await Product.updateOne(
        {
          _id: productId,
        },
        {
          $push: { comment: { author, email, comment, rating } },
        },
        { new: true, upsert: true, multi: true }
      );

      return res.status(200).json({ message: "Thank you for your review" });
    }
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
  getCompareProducts,
  saveProductReviews,
};
