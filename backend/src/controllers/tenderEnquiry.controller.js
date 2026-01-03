const pool = require("../config/db");
const sendMail = require("../config/mail");

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

await sendMail({
  to: process.env.MAIL_USER,
  subject: "New Tender Enquiry – UAS-TF",
  html: `
    <h3>New Tender Enquiry</h3>
    <p><b>Tender ID:</b> ${tenderId}</p>
    <p><b>Company:</b> ${companyName}</p>
    <p><b>Contact:</b> ${contactPerson}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Mobile:</b> ${mobile}</p>
    <p><b>Message:</b><br/>${message}</p>
  `,
});


    res.json({ success: true, message: "Enquiry submitted successfully" });
  } catch (err) {
    console.error("Tender enquiry error:", err);
    res.status(500).json({ success: false, message: "Submission failed" });
  }
};
