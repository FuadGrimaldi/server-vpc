const express = require("express");
const app = express();
const port = 5000;

app.get("/api/data", (req, res) => {
  res.json({ message: "Halo dari Backend Node.js!" });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server backend berjalan di port ${port}`);
});
