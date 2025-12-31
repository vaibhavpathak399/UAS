const express = require("express");
const router = express.Router();
const {
  submitTenderEnquiry,
} = require("../controllers/tenderEnquiry.controller");

router.post("/", submitTenderEnquiry);

module.exports = router;
