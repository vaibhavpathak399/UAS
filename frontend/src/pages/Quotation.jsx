import React, { useState, useEffect } from "react";
import "../styles/quotation.css";

const Quotation = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    company: "",
    contactPerson: "",
    email: "",
    mobile: "",
    testingCategory: "",
    description: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/quotation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success !== false) {
        alert("Quotation request submitted successfully");
        setFormData({
          company: "",
          contactPerson: "",
          email: "",
          mobile: "",
          testingCategory: "",
          description: "",
        });
      } else {
        alert("Something went wrong");
      }
    } catch {
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="quotation-page">

      {/* ===== HERO ===== */}
      <section className="quotation-hero">
        <div className="container">
          <span className="hero-tag">Official Request</span>
          <h1>Request a Quotation</h1>
          <p>
            Submit your testing requirements. Our technical team will review and
            respond with cost and schedule details.
          </p>
        </div>
      </section>

      {/* ===== FORM ===== */}
      <section className="quotation-form-section">
        <div className="container">

          <form className="quotation-form" onSubmit={handleSubmit}>
            <div className="form-grid">

              <div className="form-group">
                <label>Organisation / Company Name</label>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Contact Person</label>
                <input
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Mobile Number</label>
                <input
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group full">
                <label>Testing Category</label>
                <select
                  name="testingCategory"
                  value={formData.testingCategory}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Testing Category</option>
                  <option>Environmental / Static Testing</option>
                  <option>EMI / EMC Testing</option>
                  <option>Electrical & Power Testing</option>
                  <option>Dynamic / Flight Testing</option>
                  <option>Structural / Measurement Testing</option>
                  <option>Multiple / Other</option>
                </select>
              </div>

              <div className="form-group full">
                <label>Brief Description of Requirement</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Provide brief details of system, component or testing requirement"
                  required
                />
              </div>

            </div>

            <button className="btn primary" disabled={loading}>
              {loading ? "Submitting..." : "Submit Quotation Request"}
            </button>
          </form>

        </div>
      </section>
    </div>
  );
};

export default Quotation;
