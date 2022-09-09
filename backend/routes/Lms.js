const express = require("express");
const router = express.Router();
const {
  addLeaveApplication,
  approveLeaves,
  getAllLeaves,
  getEmployeeLeaves,
  addLeaveApplication_new,
  approveLeaves_new
} = require("../controllers/Lms");
const {
  authentication,
  costSheetApprovalAccess,
  onlyAdmin
} = require("../middlewares/auth");

router.get("/getEmployeeLeaves", authentication, getEmployeeLeaves);

// Now ADMIN can apply for Leave
router.post("/addLeaveApplication_new", authentication, addLeaveApplication_new);

// ONLY ADMIN ACCESS
router.get("/getAllLeaves", onlyAdmin, getAllLeaves);
router.post("/approveLeaves_new", onlyAdmin, approveLeaves_new);

module.exports = router;
