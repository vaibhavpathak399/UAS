const pool = require("../config/db");

// =========================
// ADMIN: ADD JOB
// =========================
exports.addJob = async (req, res) => {
  try {
    const { title, department, location, description, status } = req.body;

    await pool.query(
      `INSERT INTO jobs (title, department, location, description, status)
       VALUES ($1, $2, $3, $4, $5)`,
      [title, department, location, description, status || "Open"]
    );

    res.json({ success: true, message: "Job added successfully" });
  } catch (err) {
    console.error("Add job error:", err);
    res.status(500).json({ success: false, message: "Failed to add job" });
  }
};

// =========================
// PUBLIC: GET ONLY OPEN JOBS
// =========================
exports.getJobs = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM jobs WHERE status = 'Open' ORDER BY created_at DESC"
    );
    res.json(result.rows);
  } catch (err) {
    console.error("Get jobs error:", err);
    res.status(500).json({ message: "Failed to fetch jobs" });
  }
};

// =========================
// PUBLIC: GET SINGLE JOB BY ID
// =========================
exports.getJobById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "SELECT * FROM jobs WHERE id = $1",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error("Get job by ID error:", err);
    res.status(500).json({ message: "Failed to fetch job details" });
  }
};

// =========================
// ADMIN: GET ALL JOBS (OPEN + CLOSED)
// =========================
exports.getAllJobs = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM jobs ORDER BY created_at DESC"
    );
    res.json(result.rows);
  } catch (err) {
    console.error("Get all jobs error:", err);
    res.status(500).json({ message: "Failed to fetch all jobs" });
  }
};

// =========================
// ADMIN: UPDATE JOB STATUS
// =========================
exports.updateJobStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    await pool.query(
      "UPDATE jobs SET status = $1 WHERE id = $2",
      [status, id]
    );

    res.json({ success: true, message: "Job status updated" });
  } catch (err) {
    console.error("Update job status error:", err);
    res.status(500).json({ message: "Failed to update job status" });
  }
};

// =========================
// ADMIN: DELETE JOB
// =========================
exports.deleteJob = async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query("DELETE FROM jobs WHERE id = $1", [id]);

    res.json({ success: true, message: "Job deleted successfully" });
  } catch (err) {
    console.error("Delete job error:", err);
    res.status(500).json({ message: "Failed to delete job" });
  }
};
