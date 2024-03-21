// const { text } = require("express");
// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.status = 200;
//   res.setHeader("Content-Type", text / plain);
//   res.end("Hello World");
// });

// server.listen(3000, () => {
//   console.log("Serve on port 3000");
// });

const express = require("express");

const mongoose = require("mongoose");
require("dotenv").config();

const routes = require("./routes/TaskRoutes");

const cors = require("cors");

const app = express();
const PORT = process.env.PORT | 3000;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.use("/api", routes);

app.listen(PORT, () => console.log(`Listening at ${PORT}`));
