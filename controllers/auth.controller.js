const studentModel = require("../models/student.model");
const bcrypt = require('bcrypt');
const generatedTkt = require("../utils/tktGenerator");

const registeredUser = async (req, res) => {
  try {
    let { name ,enroll, pass, email } = req.body;
    let existedUser = await studentModel.findOne({ enroll });
    if(existedUser) return res.send("Login Please");

    bcrypt.genSalt(10, (err , salt)=>{
        bcrypt.hash(pass, salt, async(err, hash)=>{
            if(err) return res.send('Server Error', err.message);
            else{
                let newUser = await studentModel.create({
                    name,
                    enroll,
                    pass : hash,
                    email
                });
                let tkt = generatedTkt(newUser);
                res.cookie("Ticket", tkt);
                console.log('New User Created', newUser);
                res.status(200).redirect('/home');
            }
        });
    });
  } catch (error) {
    console.log('Auth Controller error' , error);
    return res.send("Internal Server Error!", error);
  }
};

const loginUser = async(req,res)=>{
    let {enroll, pass} = req.body;

    let user = await studentModel.findOne({enroll});
    if(!user){
        res.send('Error', "Enroll/Password is incorrect!");
        return res.redirect('/');
    }

    bcrypt.compare(pass, user.pass, function(err, result){
        if(result){
            let tkt = generatedTkt(user);
            res.cookie("Ticket", tkt);
            res.redirect('/home');
        }
        else{
            res.send("Enroll/Pass is Incorrect!!");
        }
    });
};

const logout = (req,res)=>{
    res.cookie('Ticket', "");
    res.redirect('/');
}

module.exports = {
    registeredUser,
    loginUser,
    logout
};