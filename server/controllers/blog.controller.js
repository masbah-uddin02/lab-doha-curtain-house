const Blog = require("../models/blog.model");
const {
  createBlogService,
  deleteBlogService,
  updateBlogService,
  getBlogByIdService,
} = require("../services/blog.service");
// for property post
exports.createBlog = async (req, res) => {
  console.log(req.body);
  try {
    const newBlog = await createBlogService(req.body);
    res.status(200).json({
      status: "success",
      message: "data inserted successfully!",
      data: newBlog,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      error: err.message,
    });
  }
};

// get Blog
exports.getBlog = async (req, res) => {
  try {
    let blog = await Blog.find({});
    res.status(200).json({
      status: "success",
      data: blog,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      error: err.message,
    });
  }
};

// delete Blog
exports.deleteBlog = async (req, res) => {
  try {
    const id = req.params.id;
    const classRoom = await deleteBlogService(id);
    res.status(200).json({
      status: "success",
      data: classRoom,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message,
    });
  }
};

// update Blog
exports.updateBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await updateBlogService(id, req.body);

    if (!blog.modifiedCount) {
      return res.status(400).json({
        status: "fail",
        message: "couldn't update",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Blog updated successfully",
      data: blog,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Internal error. couldn't update blog ",
      error: error.message,
    });
  }
};

exports.getBlogById = async (req, res) => {
  const { id } = req.params;
  try {
    const classRoom = await getBlogByIdService(id);

    res.status(200).json({
      status: "success",
      data: classRoom,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "internal error",
      error: error.message,
    });
  }
};

// get Specific Blog
exports.getSpecificBlog = async (req, res) => {
  const page = +req.query?.page;
  const size = +req.query?.size;
  const fieldName = req.query?.fieldName;
  const fieldValue = req.query?.fieldValue;
  const fieldName2 = req.query?.fieldName2;
  const fieldValue2 = req.query?.fieldValue2;
  const fieldName3 = req.query?.fieldName3;
  const fieldValue3 = req.query?.fieldValue3;

  try {
    let blogs = await Blog.find({
      $and: [
        { [fieldName]: { $eq: fieldValue } },
        { [fieldName2]: { $eq: fieldValue2 } },
        { [fieldName3]: { $eq: fieldValue3 } },
      ],
    })
      .skip(page * size)
      .limit(size);
    const total = await Blog.countDocuments({
      $and: [
        { [fieldName]: { $eq: fieldValue } },
        { [fieldName2]: { $eq: fieldValue2 } },
        { [fieldName3]: { $eq: fieldValue3 } },
      ],
    });
    res.status(200).json({
      status: "success",
      data: blogs,
      total: total,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      error: err.message,
    });
  }
};
