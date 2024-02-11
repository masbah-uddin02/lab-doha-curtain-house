const express = require("express");
const {
  createHappyClient,
  getHappyClient,
  deleteHappyClient,
  updateHappyClient,
  getHappyClientById,
  getSpecificHappyClient,
} = require("../controllers/happyClient.controller");
const router = express.Router();

router.post("/addHappyClient", createHappyClient);
router.get("/getHappyClient", getHappyClient);
router.get("/getHappyClientById/:id", getHappyClientById);
router.delete("/deleteHappyClient/:id", deleteHappyClient);
router.route("/updateHappyClient/:id").patch(updateHappyClient);
router.route("/specific").get(getSpecificHappyClient);

module.exports = router;
