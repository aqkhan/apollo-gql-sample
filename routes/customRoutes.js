const express = require("express");
const router = express.Router();
const {
  createSchedule,
  deleteSchedule,
  findAllSchedule,
  findOneSchedule,
  deleteAllSchedule,
} = require("../controllers/schedule.controller");

// create
router.post("/", createSchedule);

// Retrieve all schedules
router.get("/", findAllSchedule);

// Retrieve a single schedule with scheduleId
router.get("/:scheduleId", findOneSchedule);

// Delete a schedule with scheduleId
router.delete("/:scheduleId", deleteSchedule);

// Delete a schedule
router.delete("/", deleteAllSchedule);

module.exports = router;
