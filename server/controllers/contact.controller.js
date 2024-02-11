const Contact = require("../models/contact.model");
const {
  createContactService,
  deleteContactService,
  updateContactService,
  getContactByIdService,
} = require("../services/contact.service");
// for property post
exports.createContact = async (req, res) => {
  console.log(req.body);
  try {
    const newContact = await createContactService(req.body);
    res.status(200).json({
      status: "success",
      message: "data inserted successfully!",
      data: newContact,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      error: err.message,
    });
  }
};

// get Contact
exports.getContact = async (req, res) => {
  try {
    let contact = await Contact.find({});
    res.status(200).json({
      status: "success",
      data: contact,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      error: err.message,
    });
  }
};

// delete Contact
exports.deleteContact = async (req, res) => {
  try {
    const id = req.params.id;
    const classRoom = await deleteContactService(id);
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

// update Contact
exports.updateContact = async (req, res) => {
  const { id } = req.params;
  try {
    const contact = await updateContactService(id, req.body);

    if (!contact.modifiedCount) {
      return res.status(400).json({
        status: "fail",
        message: "couldn't update",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Contact updated successfully",
      data: contact,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Internal error. couldn't update contact ",
      error: error.message,
    });
  }
};

exports.getContactById = async (req, res) => {
  const { id } = req.params;
  try {
    const classRoom = await getContactByIdService(id);

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

// get Specific Contact
exports.getSpecificContact = async (req, res) => {
  const page = +req.query?.page;
  const size = +req.query?.size;
  const fieldName = req.query?.fieldName;
  const fieldValue = req.query?.fieldValue;
  const fieldName2 = req.query?.fieldName2;
  const fieldValue2 = req.query?.fieldValue2;
  const fieldName3 = req.query?.fieldName3;
  const fieldValue3 = req.query?.fieldValue3;

  try {
    let contacts = await Contact.find({
      $and: [
        { [fieldName]: { $eq: fieldValue } },
        { [fieldName2]: { $eq: fieldValue2 } },
        { [fieldName3]: { $eq: fieldValue3 } },
      ],
    })
      .skip(page * size)
      .limit(size);
    const total = await Contact.countDocuments({
      $and: [
        { [fieldName]: { $eq: fieldValue } },
        { [fieldName2]: { $eq: fieldValue2 } },
        { [fieldName3]: { $eq: fieldValue3 } },
      ],
    });
    res.status(200).json({
      status: "success",
      data: contacts,
      total: total,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      error: err.message,
    });
  }
};
