const { Router } = require("express");
const router = Router();
const fs = require("fs");
const { uploadText, readText } = require("../controller/textController");



// Upload and store text
router.post("/upload-text",uploadText );

// Read stored text
router.get("/read-text", readText);


module.exports = router;
