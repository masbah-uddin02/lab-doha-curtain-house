const Subscribe = require("../models/subscribe.model");
const {
  createSubscribeService,
  deleteSubscribeService,
  updateSubscribeService,
  getSubscribeByIdService,
} = require("../services/subscribe.service");
// for property post
exports.createSubscribe = async (req, res) => {
  console.log(req.body);
  try {
    const newSubscribe = await createSubscribeService(req.body);
    res.status(200).json({
      status: "success",
      message: "data inserted successfully!",
      data: newSubscribe,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      error: err.message,
    });
  }
};

// get Subscribe
exports.getSubscribe = async (req, res) => {
  try {
    let subscribe = await Subscribe.find({});
    res.status(200).json({
      status: "success",
      data: subscribe,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      error: err.message,
    });
  }
};

// delete Subscribe
exports.deleteSubscribe = async (req, res) => {
  try {
    const id = req.params.id;
    const classRoom = await deleteSubscribeService(id);
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

// update Subscribe
exports.updateSubscribe = async (req, res) => {
  const { id } = req.params;
  try {
    const subscribe = await updateSubscribeService(id, req.body);

    if (!subscribe.modifiedCount) {
      return res.status(400).json({
        status: "fail",
        message: "couldn't update",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Subscribe updated successfully",
      data: subscribe,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Internal error. couldn't update subscribe ",
      error: error.message,
    });
  }
};

exports.getSubscribeById = async (req, res) => {
  const { id } = req.params;
  try {
    const classRoom = await getSubscribeByIdService(id);

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

// get Specific Subscribe
exports.getSpecificSubscribe = async (req, res) => {
  const page = +req.query?.page;
  const size = +req.query?.size;
  const fieldName = req.query?.fieldName;
  const fieldValue = req.query?.fieldValue;
  const fieldName2 = req.query?.fieldName2;
  const fieldValue2 = req.query?.fieldValue2;
  const fieldName3 = req.query?.fieldName3;
  const fieldValue3 = req.query?.fieldValue3;

  try {
    let subscribes = await Subscribe.find({
      $and: [
        { [fieldName]: { $eq: fieldValue } },
        { [fieldName2]: { $eq: fieldValue2 } },
        { [fieldName3]: { $eq: fieldValue3 } },
      ],
    })
      .skip(page * size)
      .limit(size);
    const total = await Subscribe.countDocuments({
      $and: [
        { [fieldName]: { $eq: fieldValue } },
        { [fieldName2]: { $eq: fieldValue2 } },
        { [fieldName3]: { $eq: fieldValue3 } },
      ],
    });
    res.status(200).json({
      status: "success",
      data: subscribes,
      total: total,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      error: err.message,
    });
  }
};
