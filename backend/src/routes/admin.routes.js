const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.middleware");

const {
  getQuotations,
  getCareers,
  getTenderEnquiries,
  deleteCareer,
  deleteQuotation,   // ✅ ADD THIS
  deleteTenderEnquiry, // ✅ ADD
} = require("../controllers/admin.controller");

/* =======================
   ADMIN ROUTES (PROTECTED)
======================= */

// Quotations
router.get("/quotations", auth, getQuotations);

// ✅ DELETE QUOTATION (FIX)
router.delete("/quotations/:id", auth, deleteQuotation);

// Careers (Applications)
router.get("/careers", auth, getCareers);
router.delete("/careers/:id", auth, deleteCareer);

// Tender Enquiries
router.get("/tender-enquiries", auth, getTenderEnquiries);

// ✅ DELETE tender enquiry
router.delete("/tender-enquiries/:id", auth, deleteTenderEnquiry);


module.exports = router;
