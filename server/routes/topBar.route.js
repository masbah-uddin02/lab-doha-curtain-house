const express = require("express");
const {
  createTopBar,
  getTopBar,
  deleteTopBar,
  updateTopBar,
  getTopBarById,
  getSpecificTopBar,
} = require("../controllers/topBar.controller");
const router = express.Router();

router.post("/addTopBar", createTopBar);
router.get("/getTopBar", getTopBar);
router.get("/getTopBarById/:id", getTopBarById);
router.delete("/deleteTopBar/:id", deleteTopBar);
router.route("/updateTopBar/:id").patch(updateTopBar);
router.route("/specific").get(getSpecificTopBar);

module.exports = router;
