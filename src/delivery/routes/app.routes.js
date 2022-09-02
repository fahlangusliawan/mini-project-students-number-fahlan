const express = require("express");
const { db } = require("../../config/db");
const FacultiesRepository = require("../../repository/faculties.repository");
const ProgramsRepository = require("../../repository/programs.repository");
const StudentsRepository = require("../../repository/students.repository");
const FacultiesService = require("../../service/faculties.service");
const ProgramsService = require("../../service/programs.service");
const StudentsService = require("../../service/students.service");
const FacultiesController = require("../controller/faculties.controller");
const ProgramsController = require("../controller/programs.controller");
const StudentsController = require("../controller/students.controller");
const FacultiesRoutes = require("./faculties.routes");
const ProgramsRoutes = require("./programs.routes");
const StudentsRoutes = require("./students.routes");
const router = express.Router();

router.use('/faculty',FacultiesRoutes(FacultiesController(FacultiesService(FacultiesRepository(db)))));
router.use('/programs',ProgramsRoutes(ProgramsController(ProgramsService(ProgramsRepository(db)))));
router.use('/students',StudentsRoutes(StudentsController(StudentsService(StudentsRepository(db)))))
module.exports = router;