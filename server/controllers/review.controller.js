const Review = require("../models/review.model");
const {
  createReviewService,
  deleteReviewService,
  updateReviewService,
  getReviewByIdService,
} = require("../services/review.service");
// for property post
exports.createReview = async (req, res) => {
  try {
    const newReview = await createReviewService(req.body);
    res.status(200).json({
      status: "success",
      message: "data inserted successfully!",
      data: newReview,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      error: err.message,
    });
  }
};

// get Review
exports.getReview = async (req, res) => {
  try {
    let review = await Review.find({});
    res.status(200).json({
      status: "success",
      data: review,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      error: err.message,
    });
  }
};

// delete Review
exports.deleteReview = async (req, res) => {
  try {
    const id = req.params.id;
    const classRoom = await deleteReviewService(id);
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

// update Review
exports.updateReview = async (req, res) => {
  const { id } = req.params;
  try {
    const review = await updateReviewService(id, req.body);

    if (!review.modifiedCount) {
      return res.status(400).json({
        status: "fail",
        message: "couldn't update",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Review updated successfully",
      data: review,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Internal error. couldn't update review ",
      error: error.message,
    });
  }
};

exports.getReviewById = async (req, res) => {
  const { id } = req.params;
  try {
    const classRoom = await getReviewByIdService(id);

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

// get Specific Review
exports.getSpecificReview = async (req, res) => {
  const page = +req.query?.page;
  const size = +req.query?.size;
  const fieldName = req.query?.fieldName;
  const fieldValue = req.query?.fieldValue;
  const fieldName2 = req.query?.fieldName2;
  const fieldValue2 = req.query?.fieldValue2;
  const fieldName3 = req.query?.fieldName3;
  const fieldValue3 = req.query?.fieldValue3;

  try {
    let reviews = await Review.find({
      $and: [
        { [fieldName]: { $eq: fieldValue } },
        { [fieldName2]: { $eq: fieldValue2 } },
        { [fieldName3]: { $eq: fieldValue3 } },
      ],
    })
      .skip(page * size)
      .limit(size);
    const total = await Review.countDocuments({
      $and: [
        { [fieldName]: { $eq: fieldValue } },
        { [fieldName2]: { $eq: fieldValue2 } },
        { [fieldName3]: { $eq: fieldValue3 } },
      ],
    });
    res.status(200).json({
      status: "success",
      data: reviews,
      total: total,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      error: err.message,
    });
  }
};
