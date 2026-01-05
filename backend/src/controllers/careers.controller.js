const fs = require("fs");
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

    // 🔹 Read resume file
    const fileBuffer = fs.readFileSync(req.file.path);
    const base64Resume = fileBuffer.toString("base64");

    // 🔹 Send email with resume attachment
    await sendMail({
      to: process.env.ADMIN_EMAIL,
      subject: "New Job Application – UAS-TF",
      html: `
        <h3>New Job Application</h3>
        <p><b>Job Title:</b> ${jobTitle}</p>
        <p><b>Candidate Name:</b> ${candidateName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Mobile:</b> ${mobile}</p>
        <p>Resume attached.</p>
      `,
      attachments: [
        {
          content: base64Resume,
          name: req.file.originalname,
        },
      ],
    });

    // 🔴 IMPORTANT: delete local file after email
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
