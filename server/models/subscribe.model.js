const mongoose = require("mongoose");

const subscribeSchema = mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    bgImg: { type: String },
    shortImg: { type: String },
  },
  { timestamps: true }
);

const Subscribe = mongoose.model("Subscribe", subscribeSchema);
module.exports = Subscribe;
