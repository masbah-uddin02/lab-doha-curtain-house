const mongoose = require("mongoose");

const happyClientSchema = mongoose.Schema(
  {
    clients: { type: Number },
    network: { type: Number },
    projects: { type: Number },
  },
  { timestamps: true }
);

const HappyClient = mongoose.model("HappyClient", happyClientSchema);
module.exports = HappyClient;
