const Review = require("../models/review.model");

exports.createReviewService = async (data) => {
  const review = await Review.create(data);
  return review;
};
exports.deleteReviewService = async (id) => {
  const review = await Review.deleteOne({ _id: id });
  return review;
};

exports.updateReviewService = async (id, data) => {
  const review = await Review.updateOne({ _id: id }, data);
  return review;
};
exports.getReviewByIdService = async (id) => {
  const review = await Review.findOne({ _id: id });
  return review;
};
