const express = require("express");
const {
  createProducts,
  getProducts,
  deleteProducts,
  updateProducts,
  getProductsById,
  getSpecificProducts,
} = require("../controllers/products.controller");
const router = express.Router();

router.post("/addProducts", createProducts);
router.get("/getProducts", getProducts);
router.get("/getProductsById/:id", getProductsById);
router.delete("/deleteProducts/:id", deleteProducts);
router.route("/updateProducts/:id").patch(updateProducts);
router.route("/specific").get(getSpecificProducts);

module.exports = router;
