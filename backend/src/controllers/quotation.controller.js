const pool = require("../config/db");
const sendMail = require("../config/mail");

exports.createQuotation = async (req, res) => {
  const {
    company,
    contactPerson,
    email,
    mobile,
    testingCategory,
    description,
  } = req.body;

  try {
    /* 1️⃣ SAVE TO DATABASE */
    const query = `
      INSERT INTO quotation_requests
      (company_name, contact_person, email, mobile, testing_category, description)
      VALUES ($1, $2, $3, $4, $5, $6)
    `;

    await pool.query(query, [
      company,
      contactPerson,
      email,
      mobile,
      testingCategory,
      description,
    ]);

    /* 2️⃣ SEND EMAIL */
await sendMail({
  to: process.env.MAIL_USER,
  subject: "New Quotation Request Received – UAS-TF",
  html: `
    <h3>New Quotation Request</h3>
    <p><b>Company:</b> ${company}</p>
    <p><b>Contact Person:</b> ${contactPerson}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Mobile:</b> ${mobile}</p>
    <p><b>Testing Category:</b> ${testingCategory}</p>
    <p><b>Description:</b><br/>${description}</p>
  `,
});


    res.status(200).json({
      success: true,
      message: "Quotation saved and email sent successfully",
    });
  } catch (error) {
    console.error("❌ Quotation error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to process quotation request",
    });
  }
};
