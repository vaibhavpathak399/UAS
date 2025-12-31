import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/jobDetails.css";

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/jobs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setJob(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <p className="job-status">Loading job details…</p>;
  }

  if (!job) {
    return <p className="job-status">Job not found.</p>;
  }

  return (
    <div className="job-page">
      <div className="job-box">
        <h1 className="job-heading">{job.title}</h1>

        <p className="job-sub">
          <strong>Department:</strong> {job.department || "UASTF"} &nbsp; | &nbsp;
          <strong>Location:</strong> {job.location || "India"}
        </p>

        <hr />

        <h3 className="job-section-title">Job Description</h3>

        {/* ✅ FIX IS HERE */}
<div className="job-text">
  {job.description
    .split("\n")
    .filter(line => line.trim() !== "")
    .map((line, index) => {
      // Heading rule: line ends with :
      if (line.trim().endsWith(":")) {
        return (
          <h4 key={index} className="job-sub-heading">
            {line}
          </h4>
        );
      }

      return <p key={index}>{line}</p>;
    })}
</div>


        <hr />

        <div className="job-buttons">
          <button
            className="btn primary"
            onClick={() =>
              navigate("/apply", {
                state: { jobId: job.id, jobTitle: job.title },
              })
            }
          >
            Apply
          </button>

          <button
            className="btn secondary"
            onClick={() => navigate("/careers")}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
