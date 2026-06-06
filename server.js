// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// const phoneRoutes = require("./routes/phoneRoutes");

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.use("/api", phoneRoutes);

// app.get("/", (req, res) => {
//   res.send("API Working");
// });

// mongoose
//   .connect(process.env.MONGO_URI, {
//     serverSelectionTimeoutMS: 5000,
//   })
//   .then(() => {
//     console.log("MongoDB Connected");

//     app.listen(5000, () => {
//       console.log("Server running on port 5000");
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const express = require("express");
const cors = require("cors");

const phoneRoutes = require("./routes/phoneRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", phoneRoutes);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});