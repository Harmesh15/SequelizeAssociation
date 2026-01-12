const express = require("express");
const router = express.Router();
const courseController = require("../controller/coursesController");

router.post("/add",courseController.addCourses);
router.post("/addStudentCourse",courseController.addStudentToCourses);

module.exports = router;