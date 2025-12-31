import React, { useEffect, useState, useCallback } from "react";
import "../../styles/admin/ManageTenders.css";

const ManageTenders = () => {
  const [tenders, setTenders] = useState([]);
  const token = localStorage.getItem("adminToken");

  // Load Tenders from Backend
  const loadTenders = useCallback(() => {
    fetch("http://localhost:5000/api/tenders", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTenders(Array.isArray(data) ? data : []);
      })
      .catch(() => setTenders([]));
  }, [token]);

  useEffect(() => {
    loadTenders();
  }, [loadTenders]);

  // Delete Handler
  const deleteTender = async (id) => {
    if (!window.confirm("Are you sure you want to delete this tender? This action cannot be undone.")) return;

    try {
      const res = await fetch(`http://localhost:5000/api/tenders/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        loadTenders(); // Refresh list
      }
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  return (
    <div className="admin-tenders-page">
      <div className="admin-container">
        {/* Header Section */}
        <header className="admin-main-header">
          <div className="header-text">
            <h1>Manage Tenders</h1>
            <p>Monitor and update official tender notifications</p>
          </div>
          <div className="header-stats">
            <span className="stat-badge">Total: {tenders.length}</span>
          </div>
        </header>

        {/* Table Container */}
        <div className="tender-card-wrapper">
          <div className="table-responsive">
            <table className="modern-admin-table">
              <thead>
                <tr>
                  <th width="80">ID</th>
                  <th>Tender Title</th>
                  <th>Submission Deadline</th>
                  <th>Document</th>
                  <th className="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {tenders.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="no-data-cell">
                      <div className="empty-state">
                        <span className="icon">📂</span>
                        <p>No tenders found in the records.</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  tenders.map((t) => (
                    <tr key={t.id}>
                      <td className="id-col">#{t.id}</td>
                      <td className="title-col">
                        <strong>{t.title}</strong>
                      </td>
                      <td>
                        <span className="deadline-chip">
                          {new Date(t.last_date).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                      </td>
                      <td>
                        <a
                          href={`http://localhost:5000/${t.document_path}`}
                          target="_blank"
                          rel="noreferrer"
                          className="view-pdf-link"
                        >
                          View PDF
                        </a>
                      </td>
                      <td className="text-right">
                        <button
                          className="action-btn delete-btn"
                          onClick={() => deleteTender(t.id)}
                        >
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
    </div>
  );
};

export default ManageTenders;