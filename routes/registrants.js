const express = require("express");
const router = express.Router();
const registrantsController = require("../controllers/registrants");

//Post Routes - simplified for now

router.post("/createRegistrant", registrantsController.createRegistrant);

module.exports = router;
