import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/careers.css";

const Careers = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch("http://localhost:5000/api/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => {
        setJobs([]);
        setLoading(false);
      });
  }, []);

  return (
    <div className="careers-main-container">
      {/* --- HERO --- */}
      <section className="careers-hero-gov">
        <div className="container">
          <h1>Current Job Openings</h1>
        </div>
      </section>

      {/* --- JOB LISTINGS --- */}
      <section className="jobs-list-section">
        <div className="container">
          {loading && <p className="status-msg">Loading opportunities...</p>}
          
          {!loading && jobs.length === 0 && (
            <div className="no-jobs-card">
              <p>No current openings available. Please check back later.</p>
            </div>
          )}

          <div className="job-cards-wrapper">
            {jobs.map((job) => (
              <div className="wide-job-card" key={job.id}>
                <div className="card-top">
                  <div className="title-group">
                    <h3>{job.title}</h3>
                    <div className="job-meta-row">
                      <span>📍 {job.location || "Kanpur, India"}</span>
                      <span className="sep">|</span>
                      <span className="dept-txt">{job.department || "Technical"}</span>
                    </div>
                  </div>
                  <div className="action-group">
                    <button 
                      className="view-details-btn"
                      onClick={() => navigate(`/careers/${job.id}`)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
                
                <div className="card-body">
                  <p>{job.description?.slice(0, 220)}...</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION (PEHLE JAISA STYLE) --- */}
      <section className="careers-bottom-cta">
        <div className="container">
          <h2>Didn’t Find a Suitable Position?</h2>
          <p>Submit your profile for future opportunities in our talent pool.</p>
          <button 
            className="resume-submit-btn"
            onClick={() => navigate("/apply", { state: { jobTitle: "General Application" } })}
          >
            Submit Your Resume
          </button>
        </div>
      </section>
    </div>
  );
};

export default Careers;