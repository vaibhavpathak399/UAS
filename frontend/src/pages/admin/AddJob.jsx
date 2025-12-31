import React, { useState } from "react";
import "../../styles/admin/AddJob.css";

const AddJob = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    department: "",
    location: "",
    description: "",
  });

  const submit = async (e) => {
    e.preventDefault();
    if (loading) return;
    const token = localStorage.getItem("adminToken");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        alert("🚀 Job published successfully!");
        setForm({ title: "", department: "", location: "", description: "" });
      }
    } catch {
      alert("Failed to add job");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="premium-job-container">
      <div className="glass-card">
        <div className="card-accent"></div>
        <div className="card-content">
          <header className="form-header">
            <div className="icon-circle">💼</div>
            <div>
              <h2>Create Job</h2>
              <p>Post a new opening for the team</p>
            </div>
          </header>

          <form onSubmit={submit} className="premium-form">
            <div className="input-row">
              <label>Job Title</label>
              <input
                placeholder="e.g. Lead System Architect"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                required
              />
            </div>

            <div className="input-grid-2">
              <div className="input-row">
                <label>Department</label>
                <input
                  placeholder="Engineering"
                  value={form.department}
                  onChange={(e) => setForm({ ...form, department: e.target.value })}
                />
              </div>
              <div className="input-row">
                <label>Location</label>
                <input
                  placeholder="Remote / Kanpur"
                  value={form.location}
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
                />
              </div>
            </div>

            <div className="input-row">
              <label>Role Description</label>
              <textarea
                rows="5"
                placeholder="What are the key responsibilities?"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                required
              />
            </div>

            <div className="form-footer">
              <button 
                type="button" 
                className="cancel-link" 
                onClick={() => setForm({title:"", department:"", location:"", description:""})}
              >
                Reset
              </button>
              <button type="submit" className="glow-button" disabled={loading}>
                {loading ? "Publishing..." : "Publish Vacancy"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddJob;