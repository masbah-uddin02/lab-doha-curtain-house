const HappyClient = require("../models/happyClient.model");
const {
  createHappyClientService,
  deleteHappyClientService,
  updateHappyClientService,
  getHappyClientByIdService,
} = require("../services/happyClient.service");
// for property post
exports.createHappyClient = async (req, res) => {
  console.log(req.body);
  try {
    const newHappyClient = await createHappyClientService(req.body);
    res.status(200).json({
      status: "success",
      message: "data inserted successfully!",
      data: newHappyClient,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      error: err.message,
    });
  }
};

// get HappyClient
exports.getHappyClient = async (req, res) => {
  try {
    let happyClient = await HappyClient.find({});
    res.status(200).json({
      status: "success",
      data: happyClient,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      error: err.message,
    });
  }
};

// delete HappyClient
exports.deleteHappyClient = async (req, res) => {
  try {
    const id = req.params.id;
    const classRoom = await deleteHappyClientService(id);
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

// update HappyClient
exports.updateHappyClient = async (req, res) => {
  const { id } = req.params;
  try {
    const happyClient = await updateHappyClientService(id, req.body);

    if (!happyClient.modifiedCount) {
      return res.status(400).json({
        status: "fail",
        message: "couldn't update",
      });
    }
    res.status(200).json({
      status: "success",
      message: "HappyClient updated successfully",
      data: happyClient,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Internal error. couldn't update happyClient ",
      error: error.message,
    });
  }
};

exports.getHappyClientById = async (req, res) => {
  const { id } = req.params;
  try {
    const classRoom = await getHappyClientByIdService(id);

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

// get Specific HappyClient
exports.getSpecificHappyClient = async (req, res) => {
  const page = +req.query?.page;
  const size = +req.query?.size;
  const fieldName = req.query?.fieldName;
  const fieldValue = req.query?.fieldValue;
  const fieldName2 = req.query?.fieldName2;
  const fieldValue2 = req.query?.fieldValue2;
  const fieldName3 = req.query?.fieldName3;
  const fieldValue3 = req.query?.fieldValue3;

  try {
    let happyClients = await HappyClient.find({
      $and: [
        { [fieldName]: { $eq: fieldValue } },
        { [fieldName2]: { $eq: fieldValue2 } },
        { [fieldName3]: { $eq: fieldValue3 } },
      ],
    })
      .skip(page * size)
      .limit(size);
    const total = await HappyClient.countDocuments({
      $and: [
        { [fieldName]: { $eq: fieldValue } },
        { [fieldName2]: { $eq: fieldValue2 } },
        { [fieldName3]: { $eq: fieldValue3 } },
      ],
    });
    res.status(200).json({
      status: "success",
      data: happyClients,
      total: total,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      error: err.message,
    });
  }
};
