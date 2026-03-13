const express = require("express");
const router = express.Router();
const sociosController = require("../controllers/sociosController");

router.post("/", sociosController.createSocio);
router.get("/", sociosController.getSocios);
router.get("/:id", sociosController.getSocioById);
router.delete("/:id", sociosController.deleteSocio);

module.exports = router;