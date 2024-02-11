const express = require("express");
const {
  createContact,
  getContact,
  deleteContact,
  updateContact,
  getContactById,
  getSpecificContact,
} = require("../controllers/contact.controller");
const router = express.Router();

router.post("/addContact", createContact);
router.get("/getContact", getContact);
router.get("/getContactById/:id", getContactById);
router.delete("/deleteContact/:id", deleteContact);
router.route("/updateContact/:id").patch(updateContact);
router.route("/specific").get(getSpecificContact);

module.exports = router;
