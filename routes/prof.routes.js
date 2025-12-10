const express = require("express");
const router = express.Router();
const profModel = require("../models/prof.model");
const isProf = require("../middlewares/isProf");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


if (process.env.NODE_ENV === "development") {
  router.post("/create", async (req, res) => {
    try {
      let owners = await profModel.find();
      if (owners.length > 0) return res.status(403).send("Permission required");

      let { fullname, email, password } = req.body;

      // HASHING PASSWORD
      bcrypt.genSalt(10, (err, salt) => {
        if (err) return res.send("Salt error");

        bcrypt.hash(password, salt, async (err, hash) => {
          if (err) return res.send("Hash error");

          let createdProf = await profModel.create({
            fullname,
            email,
            password: hash,
          });

          return res.status(201).send(createdProf);
        });
      });

    } catch (error) {
      res.send("Server error");
    }
  });
}


router.get('/login', (req,res)=>{
  res.render('profLogin');
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const prof = await profModel.findOne({ email });
  if (!prof) return res.send("Invalid email or password");

  const isMatch = await bcrypt.compare(password, prof.password);
  if (!isMatch) return res.send("Invalid password");
 
  const token = jwt.sign({ id: prof._id }, process.env.JWT_SEC);

  res.cookie("Ticket", token);
  return res.redirect("/prof/dashBoard");
});

router.get('/dashBoard', isProf, async (req, res) => {
  try {
    const prof = await profModel.findById(req.user._id).populate('pdfs');
   
    res.render('profDash', {user: req.user, pdfs: prof.pdfs});
  } catch (error) {
    res.send('Error in DashBoard');
  }
});

router.get('/logout', (req,res)=>{
    res.cookie('Ticket', "");
    res.redirect('/');
});

module.exports = router;
