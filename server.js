const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./models/Phone"); // اینو اضافه کن

const phoneRoutes = require("./routes/phoneRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", phoneRoutes);

app.get("/", (req, res) => {
  res.send("API Working");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});