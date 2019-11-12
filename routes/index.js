const express = require("express");
const router = express.Router();

const PagesControler = require("../controllers/PagesController");
router.get("/", PagesControler.home);

const ApplicationController = require("../controllers/ApplicationController");
router.post("/send", ApplicationController.store);

module.exports = router;
