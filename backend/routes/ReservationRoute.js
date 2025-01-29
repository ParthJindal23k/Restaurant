const express = require("express");
const {sendreservation}  = require("../controller/reservation.js");

const router =express.Router();

router.post("/send",sendreservation);

module.exports = router;