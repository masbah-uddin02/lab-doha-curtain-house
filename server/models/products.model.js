const mongoose = require("mongoose");

const productsSchema = mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    feature: { type: String },
    category: { type: String },
    img1: { type: String },
    img2: { type: String },
    img3: { type: String },
    img4: { type: String },
    img5: { type: String },
    img6: { type: String },
    img7: { type: String },
    img8: { type: String },
    img9: { type: String },
    img10: { type: String },
  },
  { timestamps: true }
);

const Products = mongoose.model("Products", productsSchema);
module.exports = Products;
