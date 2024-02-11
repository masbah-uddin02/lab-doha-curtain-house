const mongoose = require("mongoose");

const blogSchema = mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    authorName: { type: String },
    date: { type: String },
    img: { type: String },

  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
