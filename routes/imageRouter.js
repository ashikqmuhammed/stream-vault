const { Router } = require("express");
const upload = require("../middleware/multer");
const router = Router();
const { uploadImage, streamImage } = require("../controller/imageController");


// Upload and store an image
router.post("/upload-image", upload.single("image"),uploadImage );
// Stream the stored image
router.get("/image/:filename",streamImage );

module.exports = router;