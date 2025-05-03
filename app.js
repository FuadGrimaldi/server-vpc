const express = require("express");
const cors = require("cors");
const expressLayout = require("express-ejs-layouts");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
const port = 5000;

app.use(cors()); // Middleware CORS

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// Templating layout
app.get("/", (req, res) => {
  res.render("index"); // akan otomatis cari di views/index.ejs
});
app.set("view engine", "ejs");

// Endpoint API
app.get("/api/data", (req, res) => {
  res.json({ message: "Halo dari Backend Node.js!" });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server backend berjalan di http://0.0.0.0:${port}`);
});
