const express = require("express");
const router = express.Router();
const planesController = require("../controllers/planesController");

router.post("/", planesController.createPlan);
router.get("/", planesController.getPlanes);

module.exports = router;