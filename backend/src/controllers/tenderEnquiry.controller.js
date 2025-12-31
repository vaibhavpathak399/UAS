const pool = require("../config/db");
const transporter = require("../config/mail");

exports.submitTenderEnquiry = async (req, res) => {
  try {
    const {
      tenderId,
      companyName,
      contactPerson,
      email,
      mobile,
      message,
    } = req.body;

    // ✅ FIXED COLUMN NAME: enquiry_message
    await pool.query(
      `INSERT INTO tender_enquiries
       (tender_id, company_name, contact_person, email, mobile, enquiry_message)
       VALUES ($1, $2, $3, $4, $5, $6)`,
      [tenderId, companyName, contactPerson, email, mobile, message]
    );

    await transporter.sendMail({
      from: `"UASTF Website" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      subject: "New Tender Enquiry – UASTF",
      text: `
New tender enquiry received.

Tender ID: ${tenderId}
Company: ${companyName}
Contact: ${contactPerson}
Email: ${email}
Mobile: ${mobile}

Message:
${message}
      `,
    });

    res.json({ success: true, message: "Enquiry submitted successfully" });
  } catch (err) {
    console.error("Tender enquiry error:", err);
    res.status(500).json({ success: false, message: "Submission failed" });
  }
};
