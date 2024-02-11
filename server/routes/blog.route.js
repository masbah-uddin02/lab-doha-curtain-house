const express = require("express");
const {
  createBlog,
  getBlog,
  deleteBlog,
  updateBlog,
  getBlogById,
  getSpecificBlog,
} = require("../controllers/blog.controller");
const router = express.Router();

router.post("/addBlog", createBlog);
router.get("/getBlog", getBlog);
router.get("/getBlogById/:id", getBlogById);
router.delete("/deleteBlog/:id", deleteBlog);
router.route("/updateBlog/:id").patch(updateBlog);
router.route("/specific").get(getSpecificBlog);

module.exports = router;
