const express = require('express');
const router = express.Router();
const postModel = require('../models/post.model');
const isLoggedIn = require('../middlewares/isLoggedIn');

router.get('/', (req,res)=>{
    res.render('index');
});

router.get('/home', isLoggedIn , async (req,res)=>{
    let posts = await postModel.find().populate('uploadedBy', "fullname")
    res.render('home', {posts , user: req.user});
});


router.get("/logout", isLoggedIn, (req,res)=>{
    res.clearCookie('Ticket');
    res.redirect('/');
});

module.exports = router;