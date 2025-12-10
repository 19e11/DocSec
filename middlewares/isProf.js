const jwt = require("jsonwebtoken");
const profModel = require("../models/prof.model");

module.exports = async (req, res, next) => {
  try {
    if (!req.cookies || !req.cookies.Ticket) {
      return res.redirect("/prof/login");
    }

    const decoded = jwt.verify(req.cookies.Ticket, process.env.JWT_SEC);

    const prof = await profModel.findById(decoded.id).select("-password");
    if (!prof) {
      return res.redirect("/prof/login");
    }

    req.user = prof;
    next();

  } catch (err) {
    console.log("isProf ERROR:", err);
    return res.redirect("/prof/login");
  }
};
