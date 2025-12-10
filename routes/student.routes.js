const express = require('express');
const router = express.Router();
const {registeredUser, loginUser , logout} = require('../controllers/auth.controller');
const postModel = require('../models/post.model');
const isLoggedIn = require('../middlewares/isLoggedIn');

router.get('/regi', (req,res)=>{
    res.render('stuRegi');
});

router.post("/regi", registeredUser);

router.get('/login', (req,res)=>{
    res.render('stuLogin');
});
router.post("/login", loginUser);


router.get('/home', isLoggedIn, async (req,res)=>{
    let posts = await postModel.find().populate('uploadedBy', "fullname");
    res.render('home', {posts , user: req.user});
})

router.get('/logout', logout);

module.exports = router;