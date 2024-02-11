const mongoose = require("mongoose");

const topBarSchema = mongoose.Schema(
  {
    phone: { type: String },
    logo: { type: String },
    offer: { type: String },
    deliveryLocation: { type: String },
  },
  { timestamps: true }
);

const TopBar = mongoose.model("TopBar", topBarSchema);
module.exports = TopBar;
