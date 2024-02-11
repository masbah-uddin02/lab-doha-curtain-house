const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    sectionName: { type: String, default: "Contact Section" },
    name: { type: String },
    address: { type: String },
    phone: { type: String },
    email: { type: String },
    facebook: { type: String },
    instagram: { type: String },
    x: { type: String },
    img: { type: String },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);
module.exports = Contact;
