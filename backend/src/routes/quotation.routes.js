const express = require("express");
const router = express.Router();
const {
  createQuotation,
} = require("../controllers/quotation.controller");

// POST: Create quotation
router.post("/", createQuotation);

module.exports = router;
