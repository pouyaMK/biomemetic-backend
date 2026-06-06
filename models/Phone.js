// const mongoose = require("mongoose");

// const phoneSchema = new mongoose.Schema(
//   {
//     phone: {
//       type: String,
//       required: true,
//     },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Phone", phoneSchema);

const mongoose = require("mongoose");

const phoneSchema = new mongoose.Schema(
  {
    phone: {
      type: String,
      required: true,
    },

    feature: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Phone", phoneSchema);