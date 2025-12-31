const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload.middleware");
const { applyJob } = require("../controllers/careers.controller");

router.post("/apply", upload.single("resume"), applyJob);

module.exports = router;
