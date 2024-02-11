const Service = require("../models/service.model");

exports.createServiceService = async (data) => {
  const service = await Service.create(data);
  return service;
};
exports.deleteServiceService = async (id) => {
  const service = await Service.deleteOne({ _id: id });
  return service;
};

exports.updateServiceService = async (id, data) => {
  const service = await Service.updateOne({ _id: id }, data);
  return service;
};
exports.getServiceByIdService = async (id) => {
  const service = await Service.findOne({ _id: id });
  return service;
};
