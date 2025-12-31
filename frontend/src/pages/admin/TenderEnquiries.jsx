import React, { useEffect, useState, useMemo, useCallback } from "react";
import "../../styles/admin/TenderEnquiries.css";

const TenderEnquiries = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTenderId, setSelectedTenderId] = useState("All");
  const token = localStorage.getItem("adminToken");

  const fetchEnquiries = useCallback(() => {
    setLoading(true);
    fetch("http://localhost:5000/api/admin/tender-enquiries", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((res) => setData(Array.isArray(res) ? res : []))
      .catch(() => setData([]))
      .finally(() => setLoading(false));
  }, [token]);

  useEffect(() => {
    fetchEnquiries();
  }, [fetchEnquiries]);

  // DELETE FUNCTION
  const deleteEnquiry = async (id) => {
    if (!window.confirm("Are you sure you want to delete this enquiry record?")) return;

    try {
      const res = await fetch(`http://localhost:5000/api/admin/tender-enquiries/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.ok) {
        setData((prev) => prev.filter((item) => item.id !== id));
      } else {
        alert("Failed to delete the record.");
      }
    } catch (err) {
      console.error("Delete Error:", err);
    }
  };

  const tenderIds = useMemo(() => {
    const ids = data.map((item) => item.tender_id).filter((id) => id);
    return ["All", ...new Set(ids)];
  }, [data]);

  const filteredData = useMemo(() => {
    if (selectedTenderId === "All") return data;
    return data.filter((item) => String(item.tender_id) === String(selectedTenderId));
  }, [data, selectedTenderId]);

  return (
    <div className="gov-admin-page">
      <div className="gov-top-header">
        <div className="header-titles">
          <h1>Tender Inquiries</h1>
          <p>Review and manage submissions from potential bidders.</p>
        </div>

        <div className="gov-filter-panel">
          <div className="control-group">
            <label>Filter by Tender ID</label>
            <select
              className="gov-dropdown"
              value={selectedTenderId}
              onChange={(e) => setSelectedTenderId(e.target.value)}
            >
              {tenderIds.map((id) => (
                <option key={id} value={id}>
                  {id === "All" ? "All Submissions" : `ID: ${id}`}
                </option>
              ))}
            </select>
          </div>
          <button className="gov-btn-sync" onClick={fetchEnquiries}>
            ↻ Sync
          </button>
        </div>
      </div>

      <div className="gov-content-area">
        <div className="data-meta-bar">
          Total: <strong>{data.length}</strong> | Showing: <strong>{filteredData.length}</strong>
        </div>

        {loading ? (
          <div className="gov-loader">Loading secure records...</div>
        ) : filteredData.length === 0 ? (
          <div className="gov-no-data">No inquiries found for this selection.</div>
        ) : (
          <div className="enquiry-grid">
            {filteredData.map((e, index) => (
              <div key={e.id || index} className="gov-inquiry-card">
                <div className="card-header">
                  <span className="tender-badge">Tender Ref: {e.tender_id}</span>
                  <span className="date-label">{new Date(e.created_at).toLocaleDateString("en-GB")}</span>
                </div>

                <div className="card-body">
                  <div className="info-section">
                    <h3 className="company-name">{e.company_name}</h3>
                    <p className="contact-person">👤 {e.contact_person}</p>
                    <div className="contact-details">
                      <span>📧 {e.email}</span>
                      <span>📞 {e.mobile}</span>
                    </div>
                  </div>

                  <div className="message-section">
                    <label>Requirements:</label>
                    <p>{e.enquiry_message || "No detailed message provided."}</p>
                  </div>
                </div>

                <div className="card-footer">
                  <a href={`mailto:${e.email}`} className="btn-reply">
                    Reply via Email
                  </a>
                  <button onClick={() => deleteEnquiry(e.id)} className="btn-delete-icon" title="Delete Record">
                    🗑️ Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TenderEnquiries;