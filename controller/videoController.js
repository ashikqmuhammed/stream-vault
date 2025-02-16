const fs = require("fs");   
const path = require("path");

const uploadVideo =  (req, res) => {
    if (!req.file) return res.status(400).json({ success: false, message: "Video required" });

    res.json({ success: true, message: "Video saved", filename: req.file.filename });
}

const streamVideo =  (req, res) => {
    const videoPath = path.join("uploads", req.params.filename);
    if (!fs.existsSync(videoPath)) return res.status(404).json({ success: false, message: "Video not found" });

    res.setHeader("Content-Type", "video/mp4");
    fs.createReadStream(videoPath).pipe(res);
}

module.exports = {
    uploadVideo,
    streamVideo
}