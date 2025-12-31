const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.middleware");

const {
  addJob,
  getJobs,
  getJobById,
  getAllJobs,
  updateJobStatus,
  deleteJob,
} = require("../controllers/job.controller");

/* =========================
   PUBLIC ROUTES
========================= */

// All open jobs
router.get("/", getJobs);

// =========================
/* ADMIN ROUTES (PROTECTED)
========================= */

// Get all jobs (Open + Closed)
router.get("/admin/all", auth, getAllJobs);

// Add new job
router.post("/", auth, addJob);

// Update job status
router.put("/:id/status", auth, updateJobStatus);

// Delete job
router.delete("/:id", auth, deleteJob);

// =========================
/* SINGLE JOB (LAST ONLY)
========================= */

// Get job by ID
router.get("/:id", getJobById);

module.exports = router;
