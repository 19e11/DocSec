const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const studentModel = require('../models/student.model');
const postModel = require('../models/post.model');
const isStud = require('../middlewares/isLoggedIn');

router.get('/:postId', isStud, async (req,res)=>{
    try {
        const postId = req.params.postId;

        const student = req.user;

        const post = await postModel.findById(postId);
        if(!post) return res.send('error in dl');

        const alreadyDownloaded = (student.downloaded || []).some(
            (id) => id.toString() === postId,
        );

        if(alreadyDownloaded) return res.send("You already have this file");

        await studentModel.findByIdAndUpdate(student._id, {
            $addToSet : {downloaded: new mongoose.Types.ObjectId(postId)}
        });

        return res.redirect(post.fileUrl);

    } catch (error) {
        console.log("Error in Dowloading!", error);
    }
});

module.exports = router;