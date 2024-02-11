const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    icon: { type: String },
    img1: { type: String },
    img2: { type: String },
    img3: { type: String },
    img4: { type: String },
    img5: { type: String },
  },
  { timestamps: true }
);

const Service = mongoose.model("Service", serviceSchema);
module.exports = Service;
