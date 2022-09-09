const express = require("express");
const router = express.Router();
const { onlyAdmin } = require("../middlewares/auth");
const {
  AddVendor,
  getAllVendors,
  createVendorReport,
  getVendorReport,
  getVendorTypeDetails,
} = require("../controllers/vendor");

router.post("/createVendorReport", createVendorReport);
router.post("/addVendor", AddVendor);
router.get("/getVendors", getAllVendors);
router.get("/getVendorReport", getVendorReport);
router.get("/getVendorTypeDetails", getVendorTypeDetails);

module.exports = router;
