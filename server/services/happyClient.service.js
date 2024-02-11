const HappyClient = require("../models/happyClient.model");

exports.createHappyClientService = async (data) => {
  const happyClient = await HappyClient.create(data);
  return happyClient;
};
exports.deleteHappyClientService = async (id) => {
  const happyClient = await HappyClient.deleteOne({ _id: id });
  return happyClient;
};

exports.updateHappyClientService = async (id, data) => {
  const happyClient = await HappyClient.updateOne({ _id: id }, data);
  return happyClient;
};
exports.getHappyClientByIdService = async (id) => {
  const happyClient = await HappyClient.findOne({ _id: id });
  return happyClient;
};
