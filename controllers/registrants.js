const Registrant = require("../models/Registrant");

module.exports = {
  createRegistrant: async (req, res) => {
    try {
      await Registrant.create({
        lastName: req.body.lastName,
        firstName: req.body.firstName,
        mobileNumber: req.body.mobileNumber,
        distance: req.body.distance,
        shritSize: req.body.shirtSize,
      });
      console.log("Successful Registration!");
      res.redirect("/");
    } catch (err) {
      console.log(err);
    }
  },
  getRegistrants: async (req, res) => {
    try {
      const registrants = await Registrant.find().sort({ createdAt: "desc" }).lean()
      console.log(registrants)
      res.render("registrants.ejs", { registrants: registrants })
    } catch (err) {
      console.log(err)
    }
  }
};