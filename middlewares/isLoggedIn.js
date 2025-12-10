const jwt = require('jsonwebtoken');
const studentModel = require('../models/student.model');

const isLoggedIn = async (req,res, next) => {
    if ( !req.cookies || !req.cookies.Ticket ) {
        return res.redirect('/');
    }

    try {
        const decoded = jwt.verify(req.cookies.Ticket, process.env.JWT_SEC);
        const user = await studentModel.findOne({enroll: decoded.enroll}).select('-pass');

        if (!user) return res.redirect('/');

        req.user = user;
        next();
    } catch (error) {
        console.log("Error in isLoggedIn", error);
        res.redirect('/');
    }
};

module.exports = isLoggedIn;