const pool = require("../config/db");

// =========================
// GET ALL QUOTATIONS
// =========================
exports.getQuotations = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM quotation_requests ORDER BY created_at DESC"
    );
    res.json(result.rows);
  } catch (err) {
    console.error("Fetch quotations error:", err);
    res.status(500).json({ message: "Failed to fetch quotations" });
  }
};

// =========================
// DELETE QUOTATION ✅
// =========================
exports.deleteQuotation = async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query(
      "DELETE FROM quotation_requests WHERE id = $1",
      [id]
    );

    res.json({ success: true });
  } catch (err) {
    console.error("Delete quotation error:", err);
    res.status(500).json({ success: false });
  }
};

// =========================
// GET ALL CAREER APPLICATIONS
// =========================
exports.getCareers = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM career_applications ORDER BY created_at DESC"
    );
    res.json(result.rows);
  } catch (err) {
    console.error("Fetch careers error:", err);
    res.status(500).json({ message: "Failed to fetch careers" });
  }
};

// =========================
// DELETE CAREER APPLICATION ✅
// =========================
exports.deleteCareer = async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query(
      "DELETE FROM career_applications WHERE id = $1",
      [id]
    );

    res.json({ success: true });
  } catch (err) {
    console.error("Delete career error:", err);
    res.status(500).json({ success: false });
  }
};

// =========================
// GET ALL TENDER ENQUIRIES
// =========================
exports.getTenderEnquiries = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM tender_enquiries ORDER BY created_at DESC"
    );
    res.json(result.rows);
  } catch (err) {
    console.error("Fetch tender enquiries error:", err);
    res.status(500).json({ message: "Failed to fetch tender enquiries" });
  }
};

// =========================
// DELETE TENDER ENQUIRY ✅
// =========================
exports.deleteTenderEnquiry = async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query(
      "DELETE FROM tender_enquiries WHERE id = $1",
      [id]
    );

    res.json({ success: true });
  } catch (err) {
    console.error("Delete tender enquiry error:", err);
    res.status(500).json({ success: false });
  }
};
