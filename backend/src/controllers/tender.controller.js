const pool = require("../config/db");

/* ================= ADD TENDER (ADMIN) ================= */
exports.addTender = async (req, res) => {
  try {
    const { title, description, last_date } = req.body;

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Tender PDF is required",
      });
    }

    const documentPath = req.file.path;

    await pool.query(
      `INSERT INTO tenders (title, description, last_date, document_path)
       VALUES ($1, $2, $3, $4)`,
      [title, description, last_date, documentPath]
    );

    res.status(201).json({
      success: true,
      message: "Tender added successfully",
    });
  } catch (error) {
    console.error("❌ Add tender error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to add tender",
    });
  }
};

/* ================= GET TENDERS (PUBLIC) ================= */
exports.getTenders = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM tenders ORDER BY created_at DESC"
    );

    res.status(200).json(result.rows);
  } catch (error) {
    console.error("❌ Fetch tenders error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch tenders",
    });
  }
};

/* ================= DELETE TENDER (ADMIN) ✅ FIX ================= */
exports.deleteTender = async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query(
      "DELETE FROM tenders WHERE id = $1",
      [id]
    );

    res.json({
      success: true,
      message: "Tender deleted successfully",
    });
  } catch (error) {
    console.error("❌ Delete tender error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete tender",
    });
  }
};
