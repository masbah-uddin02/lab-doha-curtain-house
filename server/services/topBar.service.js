const TopBar = require("../models/topBar.model");

exports.createTopBarService = async (data) => {
  const topBar = await TopBar.create(data);
  return topBar;
};
exports.deleteTopBarService = async (id) => {
  const topBar = await TopBar.deleteOne({ _id: id });
  return topBar;
};

exports.updateTopBarService = async (id, data) => {
  const topBar = await TopBar.updateOne({ _id: id }, data);
  return topBar;
};
exports.getTopBarByIdService = async (id) => {
  const topBar = await TopBar.findOne({ _id: id });
  return topBar;
};
