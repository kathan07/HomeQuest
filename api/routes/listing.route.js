const express = require("express");
const verifyToken = require("../utils/verifyUser");
const createListing = require("../controllers/listing.controller.js");


const router = express.Router();

router.post('/create', verifyToken, createListing);

module.exports = router;    