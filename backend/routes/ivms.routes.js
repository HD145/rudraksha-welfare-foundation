const express = require("express");
const router = express.Router();

const {addToIVMS} = require("../controllers/ivms.controller");
const {opsAdmin} = require("../middlewares/auth");

router.post("/add-to-IVMS", opsAdmin, addToIVMS);

module.exports = router;