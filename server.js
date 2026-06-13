
const express = require("express");
const cors = require("cors");

const phoneRoutes = require("./routes/phoneRoutes");

const app = express();

// app.use(cors());
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

app.use(express.json());

app.use("/api", phoneRoutes);

app.get("/", (req, res) => {
  res.send("API Working");
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });