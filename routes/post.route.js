const express = require("express");
const router = express.Router();
const upload = require("../config/multer");
const postModel = require("../models/post.model");
const ImageKit = require("../utils/imgKit");
const profModel = require("../models/prof.model");
const isProf = require("../middlewares/isProf");

router.post("/upload", isProf,upload.single("file"), async (req, res) => {
    try {
        if (!req.file) return res.send('No File Uploaded!');

    const allowed = ["application/pdf", "image/png", "image/jpeg"];
    if (!allowed.includes(req.file.mimetype)) return res.status(400).json({ error: "Only PDF / PNG / JPG allowed" });
    
    const  base64 = req.file.buffer.toString("base64");
    const fileForUpload = `data:${req.file.mimetype};base64,${base64}`;

    const options = {
        file: fileForUpload,
        fileName: req.file.originalname,
        folder: "/PDF"
    }

    
    const  response = await ImageKit.upload(options);
    
    const newPost = await  postModel.create({
        title: req.body.title || req.file.originalname,
        description : req.body.description || '',
        fileUrl : response.url,
        fileSize : req.file.size,
        uploadedBy: req.user._id,
    });

    await profModel.findByIdAndUpdate(req.user._id, {
        $addToSet: {pdfs: newPost._id}
    });

    return res.redirect('/prof/dashBoard');

    } catch (error) {
       console.log("Error in Post route", error); 
    }
});

module.exports = router;
