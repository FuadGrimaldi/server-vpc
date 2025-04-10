const express = require("express");
const cors = require("cors"); // Tambahkan ini
const app = express();
const port = 5000;

// Izinkan permintaan dari semua origin (atau bisa dibatasi ke origin tertentu)
app.use(cors()); // Middleware CORS

// Endpoint API
app.get("/api/data", (req, res) => {
  res.json({ message: "Halo dari Backend Node.js!" });
});

// Jalankan server di semua IP agar bisa diakses dari jaringan lokal
app.listen(port, "0.0.0.0", () => {
  console.log(`Server backend berjalan di http://0.0.0.0:${port}`);
});
