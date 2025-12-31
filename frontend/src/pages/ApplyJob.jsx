import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/applyJob.css";

const ApplyJob = () => {
  const location = useLocation();

  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState([]);

  const [form, setForm] = useState({
    jobId: location.state?.jobId || "",
    jobTitle: location.state?.jobTitle || "",
    candidateName: "",
    email: "",
    mobile: "",
    resume: null,
  });

  /* Fetch jobs only if not coming from job page */
  useEffect(() => {
    if (!form.jobId) {
      fetch("http://localhost:5000/api/jobs")
        .then((res) => res.json())
        .then((data) => Array.isArray(data) && setJobs(data))
        .catch(() => setJobs([]));
    }
  }, [form.jobId]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "resume") {
      setForm({ ...form, resume: files[0] });
    } else if (name === "jobId") {
      const selected = jobs.find((j) => j.id.toString() === value);
      setForm({
        ...form,
        jobId: value,
        jobTitle: selected?.title || "",
      });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    if (!form.resume) {
      alert("Please upload your resume");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    Object.entries(form).forEach(([key, val]) => {
      if (val) formData.append(key, val);
    });

    try {
      const res = await fetch("http://localhost:5000/api/careers/apply", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        alert("Application submitted successfully");
        setForm({
          jobId: "",
          jobTitle: "",
          candidateName: "",
          email: "",
          mobile: "",
          resume: null,
        });
      } else {
        alert("Submission failed");
      }
    } catch {
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="apply-job-page">
      {/* HERO */}
      <section className="apply-hero">
        <h1>Apply for Career Opportunity</h1>
        <p>
          Submit your application to be part of India’s national UAV & aerospace
          testing ecosystem.
        </p>
      </section>

      {/* FORM */}
      <section className="apply-section">
        <form className="apply-card" onSubmit={handleSubmit}>
          <h2>Candidate Application Form</h2>

          {/* JOB */}
          {form.jobId ? (
            <div className="form-group readonly">
              <label>Position Applied For</label>
              <input value={form.jobTitle} disabled />
            </div>
          ) : (
            <div className="form-group">
              <label>Select Position</label>
              <select name="jobId" onChange={handleChange} required>
                <option value="">-- Select Job Opening --</option>
                {jobs.map((job) => (
                  <option key={job.id} value={job.id}>
                    {job.title}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="form-grid">
            <div className="form-group">
              <label>Full Name</label>
              <input
                name="candidateName"
                placeholder="Enter your full name"
                value={form.candidateName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Mobile Number</label>
              <input
                name="mobile"
                placeholder="10-digit mobile number"
                value={form.mobile}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Upload Resume</label>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                required
              />
              <small>PDF / DOC / DOCX (Max 5MB)</small>
            </div>
          </div>

          <button className="apply-btn" disabled={loading}>
            {loading ? "Submitting Application..." : "Submit Application"}
          </button>
        </form>
      </section>
    </div>
  );
};

export default ApplyJob;
