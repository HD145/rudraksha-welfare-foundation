const express = require("express");
const router = express.Router();
const {
  AddEvent,
  getEvent,
  getEventCodes,
  getEventsOfEmp,
  eventapproval,
  getAllEvents,
} = require("../controllers/event");
const {
  authentication,
  opsAdmin,
} = require("../middlewares/auth");

router.post("/approveEvent", opsAdmin, eventapproval);
router.post("/addEvent", authentication, AddEvent);

router.get("/getEvent/:eventabbreviation", getEvent);
router.get("/getEventCodes/:projectHead", getEventCodes);
router.get("/geteventsofuser", authentication, getEventsOfEmp);
router.get("/getAllEvents", opsAdmin, getAllEvents);
module.exports = router;
