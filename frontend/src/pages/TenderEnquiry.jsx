import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/tenderEnquiry.css";

const TenderEnquiry = () => {
  const { id } = useParams();

  const [form, setForm] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/tender-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tenderId: id,
          ...form,
        }),
      });

      const data = await res.json();

      if (data.success !== false) {
        alert("Tender enquiry submitted successfully");

        setForm({
          companyName: "",
          contactPerson: "",
          email: "",
          mobile: "",
          message: "",
        });
      } else {
        alert("Submission failed");
      }
    } catch {
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="tender-enquiry-page">
      {/* HERO */}
      <section className="enquiry-hero">
        <div className="container">
          <h1>Tenders Notices</h1>
        </div>
      </section>

      {/* FORM */}
      <section className="enquiry-form-section">
        <div className="container">
          <div className="form-card">
            <h2>Organisation Details</h2>

            <form onSubmit={submit}>
              <div className="form-group">
                <label>Company / Organisation Name</label>
                <input
                  name="companyName"
                  value={form.companyName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Contact Person</label>
                <input
                  name="contactPerson"
                  value={form.contactPerson}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Mobile Number</label>
                  <input
                    name="mobile"
                    value={form.mobile}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Message (optional)</label>
                <textarea
                  rows="4"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              <button className="btn primary" disabled={loading}>
                {loading ? "Submitting..." : "Submit Enquiry"}
              </button>
            </form>
          </div>

          {/* NOTE */}
          <div className="enquiry-note">
            <p>
              ⚠️ Please ensure all details are correct. Official communication
              will be sent to the provided email address.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TenderEnquiry;
