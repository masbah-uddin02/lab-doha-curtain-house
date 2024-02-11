const Subscribe = require("../models/subscribe.model");

exports.createSubscribeService = async (data) => {
  const subscribe = await Subscribe.create(data);
  return subscribe;
};
exports.deleteSubscribeService = async (id) => {
  const subscribe = await Subscribe.deleteOne({ _id: id });
  return subscribe;
};

exports.updateSubscribeService = async (id, data) => {
  const subscribe = await Subscribe.updateOne({ _id: id }, data);
  return subscribe;
};
exports.getSubscribeByIdService = async (id) => {
  const subscribe = await Subscribe.findOne({ _id: id });
  return subscribe;
};
