import React, { useEffect, useState, useCallback } from "react";

import "../../styles/admin/Careers.css";

const Careers = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("adminToken");

const loadCareers = useCallback(() => {
  setLoading(true);

  fetch("http://localhost:5000/api/admin/careers", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      setData(Array.isArray(res) ? res : []);
    })
    .finally(() => setLoading(false));
}, [token]);


useEffect(() => {
  loadCareers();
}, [loadCareers]);


  // ✅ DELETE HANDLER
  const deleteCareer = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this application?"
    );

    if (!confirmDelete) return;

    try {
      await fetch(`http://localhost:5000/api/admin/careers/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // reload table
      loadCareers();
    } catch (err) {
      alert("Failed to delete application");
    }
  };

  return (
    <div className="career-page-wrapper">
      <header className="career-header">
        <div className="header-info">
          <h1>Job Applications</h1>
          <p>Review and manage candidate submissions</p>
        </div>
        <div className="stat-pill">
          Total Candidates: <strong>{data.length}</strong>
        </div>
      </header>

      <div className="career-table-card">
        <div className="table-overflow">
          <table className="career-table">
            <thead>
              <tr>
                <th>Candidate</th>
                <th>Applied For</th>
                <th>Contact Details</th>
                <th>Date Applied</th>
                <th className="text-center">Documents</th>
                <th className="text-center">Actions</th> {/* ✅ NEW */}
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="6" className="status-cell">
                    Loading candidates...
                  </td>
                </tr>
              ) : data.length === 0 ? (
                <tr>
                  <td colSpan="6" className="status-cell">
                    No applications received yet.
                  </td>
                </tr>
              ) : (
                data.map((c) => (
                  <tr key={c.id}>
                    <td>
                      <div className="candidate-info">
                        <div className="avatar-circle">
                          {c.candidate_name.charAt(0)}
                        </div>
                        <div>
                          <span className="c-name">{c.candidate_name}</span>
                          <span className="c-id">ID: #{c.id}</span>
                        </div>
                      </div>
                    </td>

                    <td>
                      <span className="job-badge">{c.job_title}</span>
                    </td>

                    <td>
                      <div className="contact-box">
                        <span className="email">{c.email}</span>
                        <span className="phone">{c.mobile}</span>
                      </div>
                    </td>

                    <td>
                      <span className="date-text">
                        {new Date(c.created_at).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </td>

                    <td className="text-center">
                      <a
                        href={`http://localhost:5000/${c.resume_path}`}
                        target="_blank"
                        rel="noreferrer"
                        className="resume-link"
                      >
                        📄 View Resume
                      </a>
                    </td>

                    {/* ✅ DELETE BUTTON */}
                    <td className="text-center">
                      <button
                        className="delete-btn"
                        onClick={() => deleteCareer(c.id)}
                      >
                        🗑 Delete
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

export default Careers;
