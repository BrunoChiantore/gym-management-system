const sociosRoutes = require("./routes/sociosRoutes");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/socios", sociosRoutes);

app.get("/", (req, res) => {
  res.json({ message: "API Gym funcionando" });
});

module.exports = app;