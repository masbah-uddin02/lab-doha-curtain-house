const Service = require("../models/service.model");
const {
  createServiceService,
  deleteServiceService,
  updateServiceService,
  getServiceByIdService,
} = require("../services/service.service");
// for property post
exports.createService = async (req, res) => {
  console.log(req.body);
  try {
    const newService = await createServiceService(req.body);
    res.status(200).json({
      status: "success",
      message: "data inserted successfully!",
      data: newService,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      error: err.message,
    });
  }
};

// get Service
exports.getService = async (req, res) => {
  try {
    let service = await Service.find({});
    res.status(200).json({
      status: "success",
      data: service,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      error: err.message,
    });
  }
};

// delete Service
exports.deleteService = async (req, res) => {
  try {
    const id = req.params.id;
    const classRoom = await deleteServiceService(id);
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

// update Service
exports.updateService = async (req, res) => {
  const { id } = req.params;
  try {
    const service = await updateServiceService(id, req.body);

    if (!service.modifiedCount) {
      return res.status(400).json({
        status: "fail",
        message: "couldn't update",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Service updated successfully",
      data: service,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Internal error. couldn't update service ",
      error: error.message,
    });
  }
};

exports.getServiceById = async (req, res) => {
  const { id } = req.params;
  try {
    const classRoom = await getServiceByIdService(id);

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

// get Specific Service
exports.getSpecificService = async (req, res) => {
  const page = +req.query?.page;
  const size = +req.query?.size;
  const fieldName = req.query?.fieldName;
  const fieldValue = req.query?.fieldValue;
  const fieldName2 = req.query?.fieldName2;
  const fieldValue2 = req.query?.fieldValue2;
  const fieldName3 = req.query?.fieldName3;
  const fieldValue3 = req.query?.fieldValue3;

  try {
    let services = await Service.find({
      $and: [
        { [fieldName]: { $eq: fieldValue } },
        { [fieldName2]: { $eq: fieldValue2 } },
        { [fieldName3]: { $eq: fieldValue3 } },
      ],
    })
      .skip(page * size)
      .limit(size);
    const total = await Service.countDocuments({
      $and: [
        { [fieldName]: { $eq: fieldValue } },
        { [fieldName2]: { $eq: fieldValue2 } },
        { [fieldName3]: { $eq: fieldValue3 } },
      ],
    });
    res.status(200).json({
      status: "success",
      data: services,
      total: total,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      error: err.message,
    });
  }
};
