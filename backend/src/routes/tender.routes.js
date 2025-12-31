const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.middleware");
const upload = require("../middleware/tenderUpload");

const {
  addTender,
  getTenders,
  deleteTender, // ✅ ADD
} = require("../controllers/tender.controller");

// =======================
// ADMIN ROUTES
// =======================

// Add Tender (PDF upload)
router.post("/add", auth, upload.single("document"), addTender);

// Delete Tender
router.delete("/:id", auth, deleteTender); // ✅ IMPORTANT

// =======================
// PUBLIC ROUTES
// =======================

// Get all tenders
router.get("/", getTenders);

module.exports = router;
