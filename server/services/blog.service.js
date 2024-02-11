const Blog = require("../models/blog.model");

exports.createBlogService = async (data) => {
  const blog = await Blog.create(data);
  return blog;
};
exports.deleteBlogService = async (id) => {
  const blog = await Blog.deleteOne({ _id: id });
  return blog;
};

exports.updateBlogService = async (id, data) => {
  const blog = await Blog.updateOne({ _id: id }, data);
  return blog;
};
exports.getBlogByIdService = async (id) => {
  const blog = await Blog.findOne({ _id: id });
  return blog;
};
