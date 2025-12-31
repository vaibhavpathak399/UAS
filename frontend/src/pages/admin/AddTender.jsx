import React, { useState } from "react";
import "../../styles/admin/AddTender.css";

const AddTender = () => {
  const [form, setForm] = useState({
    title: "",
    last_date: "",
  });
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!file) return alert("Please upload a document");

    setIsSubmitting(true);
    const token = localStorage.getItem("adminToken");

    const data = new FormData();
    data.append("title", form.title);
    data.append("last_date", form.last_date);
    data.append("document", file);

    try {
      const response = await fetch("http://localhost:5000/api/tenders/add", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: data,
      });

      if (response.ok) {
        alert("✅ Tender Published!");
        setForm({ title: "", last_date: "" });
        setFile(null);
        e.target.reset();
      }
    } catch (error) {
      alert("Error adding tender");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="tender-upload-page">
      <div className="tender-form-card">
        <div className="form-title-area">
          <span className="badge">Admin Panel</span>
          <h2>Publish New Tender</h2>
          <p>The document will be available for public download and enquiry.</p>
        </div>

        <form onSubmit={submit} className="modern-form">
          <div className="form-field">
            <label>Tender Name / Reference</label>
            <input
              required
              type="text"
              placeholder="e.g. Civil Construction Work - Phase 1"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
          </div>

          <div className="form-grid">
            <div className="form-field">
              <label>Deadline Date</label>
              <input
                required
                type="date"
                value={form.last_date}
                onChange={(e) => setForm({ ...form, last_date: e.target.value })}
              />
            </div>

            <div className="form-field">
              <label>Upload Tender Doc (PDF)</label>
              <div className="upload-wrapper">
                <input
                  required
                  type="file"
                  accept=".pdf"
                  onChange={(e) => setFile(e.target.files[0])}
                  id="doc-upload"
                  hidden
                />
                <label htmlFor="doc-upload" className="custom-upload-btn">
                  {file ? `📄 ${file.name.substring(0, 15)}...` : "Choose Document"}
                </label>
              </div>
            </div>
          </div>

          <div className="form-info-box">
            <small>ℹ️ After publishing, users can view this tender and send enquiries directly to your dashboard.</small>
          </div>

          <button type="submit" className="publish-btn" disabled={isSubmitting}>
            {isSubmitting ? "Uploading..." : "Publish Now"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTender;