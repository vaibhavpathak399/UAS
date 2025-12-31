import React, { useEffect, useState, useCallback } from "react";
import "../../styles/admin/ManageJobs.css";

const ManageJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("adminToken");

  const loadJobs = useCallback(() => {
    setLoading(true);
    fetch("http://localhost:5000/api/jobs/admin/all", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => setJobs(Array.isArray(data) ? data : []))
      .catch(() => setJobs([]))
      .finally(() => setLoading(false));
  }, [token]);

  useEffect(() => {
    loadJobs();
  }, [loadJobs]);

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.department?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const changeStatus = async (id, status) => {
    await fetch(`http://localhost:5000/api/jobs/${id}/status`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ status }),
    });
    loadJobs();
  };

  const deleteJob = async (id, title) => {
    if (window.confirm(`Delete "${title}" permanently?`)) {
      await fetch(`http://localhost:5000/api/jobs/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      loadJobs();
    }
  };

  return (
    <div className="admin-page">
      <header className="admin-header-section">
        <div className="header-left">
          <h1>Job Management</h1>
          <p>You have <strong>{jobs.length}</strong> active postings</p>
        </div>
        
        <div className="header-actions">
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input 
              type="text" 
              placeholder="Search jobs..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="refresh-btn" onClick={loadJobs} title="Reload Data">
            🔄
          </button>
        </div>
      </header>

      <div className="admin-content-card">
        <div className="table-container">
          <table className="modern-table">
            <thead>
              <tr>
                <th>Reference</th>
                <th>Role Details</th>
                <th>Department</th>
                <th>Location</th>
                <th>Current Status</th>
                <th className="text-right">Management</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan="6" className="loader-cell"><div className="spinner"></div></td></tr>
              ) : filteredJobs.length === 0 ? (
                <tr>
                  <td colSpan="6" className="empty-row">
                    <div className="empty-visual">
                      <span className="icon">☁️</span>
                      <p>No job postings found</p>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredJobs.map((job) => (
                  <tr key={job.id} className="job-row">
                    <td className="id-cell">#{job.id}</td>
                    <td className="title-cell">
                      <div className="title-wrapper">
                        <span className="main-title">{job.title}</span>
                        <span className="sub-title">Posted recently</span>
                      </div>
                    </td>
                    <td><span className="dept-tag">{job.department || "General"}</span></td>
                    <td><span className="loc-text">{job.location || "Remote"}</span></td>
                    <td>
                      <span className={`pill ${job.status.toLowerCase()}`}>
                        <span className="dot"></span>
                        {job.status}
                      </span>
                    </td>
                    <td className="actions-cell">
                      {job.status === "Open" ? (
                        <button className="act-btn close" onClick={() => changeStatus(job.id, "Closed")}>
                          Close
                        </button>
                      ) : (
                        <button className="act-btn open" onClick={() => changeStatus(job.id, "Open")}>
                          Reopen
                        </button>
                      )}
                      <button className="act-btn delete" onClick={() => deleteJob(job.id, job.title)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageJobs;