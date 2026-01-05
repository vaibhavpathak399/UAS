const fs = require("fs");
const pool = require("../config/db");
const sendMail = require("../config/mail");

exports.applyJob = async (req, res) => {
  try {
    const { jobTitle, candidateName, email, mobile } = req.body;

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Resume file is required",
      });
    }

    // 🔹 Read resume file
    const fileBuffer = fs.readFileSync(req.file.path);
    const base64Resume = fileBuffer.toString("base64");
    const fileName = req.file.originalname;

    // 1️⃣ SAVE APPLICATION TO DATABASE (VERY IMPORTANT)
    await pool.query(
      `INSERT INTO career_applications
       (job_title, candidate_name, email, mobile)
       VALUES ($1, $2, $3, $4)`,
      [jobTitle, candidateName, email, mobile]
    );

    // 2️⃣ SEND EMAIL WITH RESUME ATTACHMENT
    await sendMail({
      to: process.env.ADMIN_EMAIL,
      subject: "New Job Application – UAS Testing Foundation",
      html: `
        <h3>New Job Application</h3>
        <p><b>Job Title:</b> ${jobTitle}</p>
        <p><b>Candidate Name:</b> ${candidateName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Mobile:</b> ${mobile}</p>
      `,
      attachments: [
        {
          content: base64Resume,
          name: fileName,
        },
      ],
    });

    // 3️⃣ DELETE LOCAL FILE (Render safe)
    fs.unlinkSync(req.file.path);

    return res.status(200).json({
      success: true,
      message: "Application submitted successfully",
    });
  } catch (error) {
    console.error("❌ Careers apply error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to submit application",
    });
  }
};
