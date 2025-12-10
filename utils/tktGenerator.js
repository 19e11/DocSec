require('dotenv').config();
const jwt = require('jsonwebtoken');

const generatedTkt = (stu)=>{
    return jwt.sign({enroll : stu.enroll, id: stu._id}, process.env.JWT_SEC);
}

module.exports = generatedTkt;