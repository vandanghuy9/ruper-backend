import Blog from "../models/Blog.js";
const getShowBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find(
      {},
      "title createdAt imageUrl comment category"
    )
      .limit(3)
      .lean();
    return res.status(200).send(blogs);
  } catch (e) {
    return res.status(500).json({
      message: e.message,
    });
  }
};

const getBlogById = async (req, res) => {
  try {
    const { _id } = req.params;
    const blog = await Blog.findById(_id).lean();
    const suggestedBlog = await Blog.find(
      {
        _id: { $ne: _id }, // Exclude the input product
        category: blog.category,
      },
      "_id title category"
    )
      .limit(2)
      .lean();
    if (suggestedBlog.length > 0) {
      blog.next = suggestedBlog.at(0);
      if (suggestedBlog.at(1) !== undefined) {
        blog.previous = suggestedBlog.at(1);
      }
    }
    return res.status(200).send(blog);
  } catch (e) {
    return res.status(500).json({
      message: e.message,
    });
  }
};

const getBlogByCategory = async (req, res) => {
  try {
    const category = req?.query?.category;
    const page = parseInt(req?.query?.page);
    const limit = parseInt(req?.query?.limit);
    const searchQuery = req?.query?.query;
    const tags = req?.query?.tag;
    const offset = (page - 1) * limit;
    let query = {};
    if (category) {
      query.category = { $regex: new RegExp(category, "i") };
    }
    if (searchQuery) {
      query.title = { $regex: new RegExp(searchQuery, "i") };
    }
    if (tags) {
      const tagList = tags.split(",");
      query.tags = { $in: tagList };
    }
    const blog = await Blog.find(
      query,
      "title createdAt imageUrl comment category"
    )
      .skip(offset)
      .limit(limit)
      .exec();

    const totalItems = await Blog.countDocuments({});
    const totalPages = Math.ceil(totalItems / limit);
    return res.status(200).json({ blog, totalItems, totalPages, page });
  } catch (e) {
    return res.status(500).json({
      message: e.message,
    });
  }
};

const getAllBlogCategory = async (req, res) => {
  try {
    const categories = await Blog.aggregate([
      {
        $group: {
          _id: "$category",
          count: { $sum: 1 },
        },
      },
      {
        $sort: { count: -1 },
      },
    ]);
    return res.status(200).send(categories);
  } catch (e) {
    return res.status(500).json({
      message: e.message,
    });
  }
};

const getAllBlogTag = async (req, res) => {
  try {
    const tags = await Blog.aggregate([
      {
        $unwind: "$tags",
      },
      {
        $group: {
          _id: "$tags",
        },
      },
    ]);
    return res.status(200).send(tags);
  } catch (e) {
    return res.status(500).json({
      message: e.message,
    });
  }
};

const saveBlogComment = async (req, res) => {
  try {
    const { comment, userName, userEmail, userWebsite, _id } = req?.body;
    const blog = await Blog.findById(_id);
    blog.comment.push({ content: comment, userName, userEmail, userWebsite });
    await blog.save();
    return res.status(200).json({ message: "Thank you for your reviews" });
  } catch (e) {
    return res.status(500).json({
      message: e.message,
    });
  }
};

export {
  getShowBlogs,
  getBlogById,
  getBlogByCategory,
  getAllBlogCategory,
  getAllBlogTag,
  saveBlogComment,
};
