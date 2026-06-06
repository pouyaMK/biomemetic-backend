const express = require("express");

const {
  savePhone,
  getPhones,
} = require("../controllers/phoneController");

const router = express.Router();

router.post("/phone", savePhone);

router.get("/phones", getPhones);

module.exports = router;