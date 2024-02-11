const express = require("express");
const {
  createService,
  getService,
  deleteService,
  updateService,
  getServiceById,
  getSpecificService,
} = require("../controllers/service.controller");
const router = express.Router();

router.post("/addService", createService);
router.get("/getService", getService);
router.get("/getServiceById/:id", getServiceById);
router.delete("/deleteService/:id", deleteService);
router.route("/updateService/:id").patch(updateService);
router.route("/specific").get(getSpecificService);

module.exports = router;
