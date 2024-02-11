const Products = require("../models/products.model");
const {
  createProductsService,
  deleteProductsService,
  updateProductsService,
  getProductsByIdService,
} = require("../services/products.service");
// for property post
exports.createProducts = async (req, res) => {
  try {
    const newProducts = await createProductsService(req.body);
    res.status(200).json({
      status: "success",
      message: "data inserted successfully!",
      data: newProducts,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      error: err.message,
    });
  }
};

// get Products
exports.getProducts = async (req, res) => {
  try {
    let products = await Products.find({});
    res.status(200).json({
      status: "success",
      data: products,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      error: err.message,
    });
  }
};

// delete Products
exports.deleteProducts = async (req, res) => {
  try {
    const id = req.params.id;
    const classRoom = await deleteProductsService(id);
    res.status(200).json({
      status: "success",
      data: classRoom,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message,
    });
  }
};

// update Products
exports.updateProducts = async (req, res) => {
  const { id } = req.params;
  try {
    const products = await updateProductsService(id, req.body);

    if (!products.modifiedCount) {
      return res.status(400).json({
        status: "fail",
        message: "couldn't update",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Products updated successfully",
      data: products,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Internal error. couldn't update products ",
      error: error.message,
    });
  }
};

exports.getProductsById = async (req, res) => {
  const { id } = req.params;
  try {
    const classRoom = await getProductsByIdService(id);

    res.status(200).json({
      status: "success",
      data: classRoom,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "internal error",
      error: error.message,
    });
  }
};

// get Specific Products
exports.getSpecificProducts = async (req, res) => {
  const page = +req.query?.page;
  const size = +req.query?.size;
  const fieldName = req.query?.fieldName;
  const fieldValue = req.query?.fieldValue;
  const fieldName2 = req.query?.fieldName2;
  const fieldValue2 = req.query?.fieldValue2;
  const fieldName3 = req.query?.fieldName3;
  const fieldValue3 = req.query?.fieldValue3;

  try {
    let productss = await Products.find({
      $and: [
        { [fieldName]: { $eq: fieldValue } },
        { [fieldName2]: { $eq: fieldValue2 } },
        { [fieldName3]: { $eq: fieldValue3 } },
      ],
    })
      .skip(page * size)
      .limit(size);
    const total = await Products.countDocuments({
      $and: [
        { [fieldName]: { $eq: fieldValue } },
        { [fieldName2]: { $eq: fieldValue2 } },
        { [fieldName3]: { $eq: fieldValue3 } },
      ],
    });
    res.status(200).json({
      status: "success",
      data: productss,
      total: total,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      error: err.message,
    });
  }
};
