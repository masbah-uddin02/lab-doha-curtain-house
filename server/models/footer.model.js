const mongoose = require("mongoose");

const footerSchema = mongoose.Schema(
  {
    description: { type: String },
    info: { type: String },
    locationUrl:{ type: String },
    location: { type: String },
    phone: { type: String },
    email: { type: String },
    facebook: { type: String },
    instagram: { type: String },
    twitter: { type: String },

  },
  { timestamps: true }
);

const Footer = mongoose.model("Footer", footerSchema);
module.exports = Footer;
