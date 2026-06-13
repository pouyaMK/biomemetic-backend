// const express = require("express");

// const {
//   savePhone,
//   getPhones,
//   deletePhone,
// } = require("../controllers/phoneController");

// const router = express.Router();

// router.post("/phone", savePhone);
// router.get("/phones", getPhones);

// // NEW:
// router.delete("/phone/:id", deletePhone);


const express = require("express");

const {
  savePhone,
  getPhones,
  deletePhone
} = require("../controllers/phoneController");

const router = express.Router();

router.post("/phone", savePhone);
router.get("/phones", getPhones);
// ✅ NEW:
router.delete("/phone/:id", deletePhone);

module.exports = router; 