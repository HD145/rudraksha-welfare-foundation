const express = require("express");
const router = express.Router();
const { authentication, opsAdmin } = require("../middlewares/auth");
const {
  AddCostSheet,
  getCostSheetByEventCode,
  updateCostSheet,
} = require("../controllers/costsheet");

router.post("/addcostsheet", opsAdmin, AddCostSheet);
router.get("/getcostsheetdata/:eventId", opsAdmin, getCostSheetByEventCode);
router.post("/updatecostsheet", opsAdmin, updateCostSheet);

module.exports = router;
