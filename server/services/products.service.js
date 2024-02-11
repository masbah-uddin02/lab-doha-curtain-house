const Products = require("../models/products.model");

exports.createProductsService = async (data) => {
  const products = await Products.create(data);
  return products;
};
exports.deleteProductsService = async (id) => {
  const products = await Products.deleteOne({ _id: id });
  return products;
};

exports.updateProductsService = async (id, data) => {
  const products = await Products.updateOne({ _id: id }, data);
  return products;
};
exports.getProductsByIdService = async (id) => {
  const products = await Products.findOne({ _id: id });
  return products;
};
