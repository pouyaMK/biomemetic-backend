const express = require("express");
const { savePhone, getPhones, deletePhone, deleteAllPhones } = require("../controllers/phoneController");

const router = express.Router();

router.post("/phone", savePhone);
router.get("/phones", getPhones);
router.delete("/phone/:id", deletePhone);
router.delete("/phones", deleteAllPhones);

module.exports = router;