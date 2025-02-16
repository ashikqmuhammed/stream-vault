const express = require("express");
const fs = require("fs");
const path = require("path");
const multer = require("multer");

//Router
const textRouter = require("./routes/textRouter")
const imageRouter = require("./routes/imageRouter")
const videoRouter = require("./routes/videoRouter")

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Ensure upload directory exists
if (!fs.existsSync("uploads")) fs.mkdirSync("uploads");

app.use(textRouter)
app.use(imageRouter)
app.use(videoRouter)

app.use((err, req, res, next) => {
    res.status(500).json({ success: false, message: err.message });
})








app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
