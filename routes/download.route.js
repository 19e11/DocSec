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

        
        const alreadySeen = (student.downloaded || []).some(
            (id) => id.toString() === postId,
        );

        if (!alreadySeen) {
        await studentModel.findByIdAndUpdate(req.user._id, {
            $addToSet : {downloaded: new mongoose.Types.ObjectId(postId)}
        })} 

        await studentModel.findByIdAndUpdate(student._id, {
            $addToSet : {downloaded: new mongoose.Types.ObjectId(postId)}
        });

        return res.redirect(post.fileUrl);

    } catch (error) {
        console.log("Error in Dowloading!", error);
    }
});

module.exports = router;