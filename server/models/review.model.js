const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema(
  {
    name: { type: String },
    review: { type: String },
    location: { type: String },
    img: { type: String },

  },
  { timestamps: true }
);

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
