const SibApiV3Sdk = require("sib-api-v3-sdk");

const client = SibApiV3Sdk.ApiClient.instance;
client.authentications["api-key"].apiKey = process.env.BREVO_API_KEY;

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

async function sendMail({ to, subject, html, attachments = [] }) {
  return apiInstance.sendTransacEmail({
    sender: {
      email: process.env.MAIL_FROM,
      name: "UAS Testing Foundation",
    },
    to: [{ email: to }],
    subject,
    htmlContent: html,
    attachment: attachments, // 🔑 important
  });
}

module.exports = sendMail;
