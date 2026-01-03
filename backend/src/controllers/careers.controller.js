const pool = require("../config/db");
const sendMail = require("../config/mail");

exports.applyJob = async (req, res) => {
  try {
    const { jobTitle, candidateName, email, mobile } = req.body;

    // 🔴 Resume must exist
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Resume file is required",
      });
    }

    const resumePath = req.file.path; // server path
    const originalName = req.file.originalname;

    // 1️⃣ SAVE TO DATABASE
    await pool.query(
      `INSERT INTO career_applications
       (job_title, candidate_name, email, mobile, resume_path)
       VALUES ($1, $2, $3, $4, $5)`,
      [jobTitle, candidateName, email, mobile, resumePath]
    );

    // 2️⃣ SEND EMAIL WITH RESUME ATTACHMENT
 await sendMail({
  to: process.env.MAIL_USER,
  subject: "New Job Application – UAS-TF",
  html: `
    <h3>New Job Application</h3>
    <p><b>Job Title:</b> ${jobTitle}</p>
    <p><b>Candidate Name:</b> ${candidateName}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Mobile:</b> ${mobile}</p>
    <p>Resume uploaded successfully on server.</p>
  `,
});
    // 3️⃣ RESPONSE


    res.status(200).json({
      success: true,
      message: "Application submitted successfully",
    });
  } catch (error) {
    console.error("❌ Careers apply error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to submit application",
    });
  }
};
