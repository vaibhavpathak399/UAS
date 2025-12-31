const pool = require("../config/db");
const transporter = require("../config/mail");

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
    await transporter.sendMail({
      from: `"UASTF Website" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      subject: "New Quotation Request Received – UASTF",
      text: `
A new quotation request has been received.

Company: ${company}
Contact Person: ${contactPerson}
Email: ${email}
Mobile: ${mobile}
Testing Category: ${testingCategory}
Description: ${description}
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
