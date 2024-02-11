const mongoose = require("mongoose");

const heroSchema = mongoose.Schema(
  {
    sectionName: { type: String, default: "Hero Section" },
    title1: { type: String },
    title2: { type: String },
    content1: { type: String },
    content2: { type: String },
    img: { type: String },
  },
  { timestamps: true }
);

const Hero = mongoose.model("Hero", heroSchema);
module.exports = Hero;
