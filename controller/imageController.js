const fs = require("fs");
const path = require("path");

const uploadImage = (req, res) => {
    if (!req.file) return res.status(400).json({ success: false, message: "Image required" });

    res.json({ success: true, message: "Image saved", filename: req.file.filename });
}

const streamImage = (req, res) => {
    const filePath = path.join("uploads", req.params.filename);
    if (!fs.existsSync(filePath)) return res.status(404).json({ success: false, message: "Image not found" });

    res.setHeader("Content-Type", "image/png");
    fs.createReadStream(filePath).pipe(res);
}

module.exports = {
    uploadImage,
    streamImage
}