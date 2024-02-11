const express = require("express");
const {
  createReview,
  getReview,
  deleteReview,
  updateReview,
  getReviewById,
  getSpecificReview,
} = require("../controllers/review.controller");
const router = express.Router();

router.post("/addReview", createReview);
router.get("/getReview", getReview);
router.get("/getReviewById/:id", getReviewById);
router.delete("/deleteReview/:id", deleteReview);
router.route("/updateReview/:id").patch(updateReview);
router.route("/specific").get(getSpecificReview);

module.exports = router;
