const Contact = require("../models/contact.model");

exports.createContactService = async (data) => {
  const contact = await Contact.create(data);
  return contact;
};
exports.deleteContactService = async (id) => {
  const contact = await Contact.deleteOne({ _id: id });
  return contact;
};

exports.updateContactService = async (id, data) => {
  const contact = await Contact.updateOne({ _id: id }, data);
  return contact;
};
exports.getContactByIdService = async (id) => {
  const contact = await Contact.findOne({ _id: id });
  return contact;
};
