const { Pool } = require("pg");

const isProduction = process.env.NODE_ENV === "production";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: isProduction
    ? { rejectUnauthorized: false }
    : false,
});

pool
  .connect()
  .then(() => {
    console.log("✅ DB connected successfully");
  })
  .catch((err) => {
    console.error("❌ DB connection error:", err.message);
  });

module.exports = pool;
