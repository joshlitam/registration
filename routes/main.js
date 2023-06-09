const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");
const registrantsController = require("../controllers/registrants");

//Main Routes - simplified for now
router.get("/", homeController.getIndex);

router.get("/registrants", registrantsController.getRegistrants)

router.post("/createRegistrant", registrantsController.createRegistrant);

module.exports = router;
