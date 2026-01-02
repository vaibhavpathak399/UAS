const express = require("express");
app.set("trust proxy", 1);
const cors = require("cors");
const path = require("path");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const pool = require("./config/db");


/* ROUTES */
const quotationRoutes = require("./routes/quotation.routes");
const careerRoutes = require("./routes/careers.routes");
const adminRoutes = require("./routes/admin.routes");
const authRoutes = require("./routes/auth.routes");
const tenderRoutes = require("./routes/tender.routes");
const tenderEnquiryRoutes = require("./routes/tenderEnquiry.routes");
const jobRoutes = require("./routes/job.routes");

const app = express();

/* =======================
   SECURITY MIDDLEWARE
======================= */
app.use(helmet());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 200, // limit each IP
});

app.use(limiter);

/* =======================
   BASIC MIDDLEWARE
======================= */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* =======================
   STATIC FILES (IMPORTANT)
======================= */
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

/* =======================
   AUTH & ADMIN ROUTES
======================= */
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);

/* =======================
   API ROUTES
======================= */
app.use("/api/quotation", quotationRoutes);
app.use("/api/careers", careerRoutes);
app.use("/api/tenders", tenderRoutes);
app.use("/api/tender-enquiry", tenderEnquiryRoutes);
app.use("/api/jobs", jobRoutes);

/* =======================
   HEALTH CHECK
======================= */
app.get("/", (req, res) => {
  res.json({
    status: "OK",
    message: "UASTF Backend is running successfully",
  });
});

/* =======================
   DB CONNECTION TEST
======================= */
pool.query("SELECT NOW()", (err, result) => {
  if (err) {
    console.error("❌ DB connection error", err);
  } else {
    console.log("✅ DB connected at:", result.rows[0].now);
  }
});

module.exports = app;
