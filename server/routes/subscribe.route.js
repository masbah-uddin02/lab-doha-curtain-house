const express = require("express");
const {
  createSubscribe,
  getSubscribe,
  deleteSubscribe,
  updateSubscribe,
  getSubscribeById,
  getSpecificSubscribe,
} = require("../controllers/subscribe.controller");
const router = express.Router();

router.post("/addSubscribe", createSubscribe);
router.get("/getSubscribe", getSubscribe);
router.get("/getSubscribeById/:id", getSubscribeById);
router.delete("/deleteSubscribe/:id", deleteSubscribe);
router.route("/updateSubscribe/:id").patch(updateSubscribe);
router.route("/specific").get(getSpecificSubscribe);

module.exports = router;
