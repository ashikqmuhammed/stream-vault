const { Router } = require("express");
const upload = require("../middleware/multer");
const router = Router();
const path = require("path");
const fs = require("fs");


// Upload and store video using a writable stream
router.post("/upload-video", upload.single("video"),);

// Stream the stored video
router.get("/stream-video/:filename",);

module.exports = router;