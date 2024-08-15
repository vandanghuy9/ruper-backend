import { Schema, model } from "mongoose";
const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  previous: {
    type: Schema.Types.ObjectId,
    ref: "Blog",
  },
  next: {
    type: Schema.Types.ObjectId,
    ref: "Blog",
  },
  imageUrl: {
    type: [String],
  },
  tags: [String],
  comment: [
    {
      content: {
        type: String,
        required: true,
      },
      userName: {
        type: String,
        required: true,
      },
      userEmail: {
        type: String,
        required: true,
      },
      userWebsite: String,
      date: {
        type: Date,
        default: Date.now,
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Blog = model("Blog", blogSchema);
export default Blog;
