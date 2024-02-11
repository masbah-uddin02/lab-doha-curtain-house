const TopBar = require("../models/topBar.model");
const {
  createTopBarService,
  deleteTopBarService,
  updateTopBarService,
  getTopBarByIdService,
} = require("../services/topBar.service");
// for property post
exports.createTopBar = async (req, res) => {
  console.log(req.body);
  try {
    const newTopBar = await createTopBarService(req.body);
    res.status(200).json({
      status: "success",
      message: "data inserted successfully!",
      data: newTopBar,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      error: err.message,
    });
  }
};

// get TopBar
exports.getTopBar = async (req, res) => {
  try {
    let topBar = await TopBar.find({});
    res.status(200).json({
      status: "success",
      data: topBar,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      error: err.message,
    });
  }
};

// delete TopBar
exports.deleteTopBar = async (req, res) => {
  try {
    const id = req.params.id;
    const classRoom = await deleteTopBarService(id);
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

// update TopBar
exports.updateTopBar = async (req, res) => {
  const { id } = req.params;
  try {
    const topBar = await updateTopBarService(id, req.body);

    if (!topBar.modifiedCount) {
      return res.status(400).json({
        status: "fail",
        message: "couldn't update",
      });
    }
    res.status(200).json({
      status: "success",
      message: "TopBar updated successfully",
      data: topBar,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Internal error. couldn't update topBar ",
      error: error.message,
    });
  }
};

exports.getTopBarById = async (req, res) => {
  const { id } = req.params;
  try {
    const classRoom = await getTopBarByIdService(id);

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

// get Specific TopBar
exports.getSpecificTopBar = async (req, res) => {
  const page = +req.query?.page;
  const size = +req.query?.size;
  const fieldName = req.query?.fieldName;
  const fieldValue = req.query?.fieldValue;
  const fieldName2 = req.query?.fieldName2;
  const fieldValue2 = req.query?.fieldValue2;
  const fieldName3 = req.query?.fieldName3;
  const fieldValue3 = req.query?.fieldValue3;

  try {
    let topBars = await TopBar.find({
      $and: [
        { [fieldName]: { $eq: fieldValue } },
        { [fieldName2]: { $eq: fieldValue2 } },
        { [fieldName3]: { $eq: fieldValue3 } },
      ],
    })
      .skip(page * size)
      .limit(size);
    const total = await TopBar.countDocuments({
      $and: [
        { [fieldName]: { $eq: fieldValue } },
        { [fieldName2]: { $eq: fieldValue2 } },
        { [fieldName3]: { $eq: fieldValue3 } },
      ],
    });
    res.status(200).json({
      status: "success",
      data: topBars,
      total: total,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      error: err.message,
    });
  }
};
