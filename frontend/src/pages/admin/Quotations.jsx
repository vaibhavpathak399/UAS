import React, { useEffect, useState, useCallback } from "react";
import "../../styles/admin/Quotations.css";

const Quotations = () => {
  const [data, setData] = useState([]);
  const [expandedId, setExpandedId] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("adminToken");

  const loadQuotations = useCallback(() => {
    setLoading(true);
    fetch("http://localhost:5000/api/admin/quotations", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((r) => r.json())
      .then((res) => setData(Array.isArray(res) ? res : []))
      .catch(() => setData([]))
      .finally(() => setLoading(false));
  }, [token]);

  useEffect(() => {
    loadQuotations();
  }, [loadQuotations]);

  const filtered = data.filter((q) => {
    const matchSearch =
      q.company_name.toLowerCase().includes(search.toLowerCase()) ||
      q.contact_person.toLowerCase().includes(search.toLowerCase());
    const matchCat = category === "All" || q.testing_category === category;
    return matchSearch && matchCat;
  });

  const deleteItem = async (id) => {
    if (!window.confirm("Are you sure you want to delete this request?")) return;

    const res = await fetch(
      `http://localhost:5000/api/admin/quotations/${id}`,
      {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    if (res.ok) {
      setData((p) => p.filter((i) => i.id !== id));
      setExpandedId(null);
    }
  };

  return (
    <div className="admin-page">
      {/* HEADER */}
      <div className="admin-header">
        <div>
          <h1>Quotation Requests</h1>
          <p>Total Requests: {filtered.length}</p>
        </div>

        <div className="admin-actions">
          <input
            placeholder="Search company or contact..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="All">All Categories</option>
            {[...new Set(data.map((d) => d.testing_category))].map(
              (c) => c && <option key={c}>{c}</option>
            )}
          </select>

          <button onClick={loadQuotations}>
            {loading ? "Loading…" : "Refresh"}
          </button>
        </div>
      </div>

      {/* TABLE */}
      <div className="admin-table">
        <div className="table-head">
          <span>#</span>
          <span>Company</span>
          <span>Category</span>
          <span>Date</span>
          <span></span>
        </div>

        {filtered.length === 0 ? (
          <div className="empty">No quotation requests found</div>
        ) : (
          filtered.map((q, index) => (
            <div
              key={q.id}
              className={`row-wrap ${expandedId === q.id ? "active" : ""}`}
            >
              <div
                className="table-row"
                onClick={() =>
                  setExpandedId(expandedId === q.id ? null : q.id)
                }
              >
                <span className="index">{index + 1}</span>

                <strong>{q.company_name}</strong>

                <span className="tag">{q.testing_category}</span>

                <span>
                  {new Date(q.created_at).toLocaleDateString("en-GB")}
                </span>

                <span
                  className={`arrow ${
                    expandedId === q.id ? "open" : ""
                  }`}
                >
                  ▼
                </span>
              </div>

              {expandedId === q.id && (
                <div className="expand-box">
                  <div className="info">
                    <div>
                      <label>CONTACT PERSON</label>
                      <p>{q.contact_person || "N/A"}</p>
                    </div>
                    <div>
                      <label>EMAIL</label>
                      <p className="email">{q.email}</p>
                    </div>
                  </div>

                  <div className="message">
                    <label>REQUIREMENT</label>
                    <p>{q.message || "No message provided."}</p>
                  </div>

                  <div className="expand-footer">
                    <a href={`mailto:${q.email}`}>Reply via Email</a>

                    <button
                      className="del-btn"
                      onClick={() => deleteItem(q.id)}
                    >
                      Delete Request
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Quotations;
