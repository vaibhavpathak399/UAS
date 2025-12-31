const { Pool } = require("pg");

console.log("DATABASE_URL =>", process.env.DATABASE_URL);

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

pool
  .connect()
  .then(() => {
    console.log("✅ DB connected successfully");
  })
  .catch((err) => {
    console.error("❌ DB connection error:", err);
  });

module.exports = pool;
