const fs = require("fs");


const uploadText=async (req, res) => {
    const { text } = req.body;
    if (!text)
      return res
        .status(400)
        .json({ success: false, message: "Text is required" });
  
    try {
      await fs.promises.writeFile("uploads/text.txt", text);
      res.json({ success: true, message: "Text saved" });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: "Error saving text", error });
    }
  }


  const readText=async (req, res) => {
    try {
      const data = await fs.promises.readFile("uploads/text.txt", "utf-8");
      res.json({ success: true, text: data });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: "Error reading text", error });
    }
  }

  module.exports={
    uploadText,
    readText
  }