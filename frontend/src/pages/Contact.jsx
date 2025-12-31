import React, { useEffect } from "react";
import "../styles/contact.css";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-main-page">
      {/* ================= HERO ================= */}
      <section className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          
        </div>
      </section>

      {/* ================= CONTACT GRID ================= */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-grid">
            {/* EMAIL */}
            <div className="contact-card">
              <div className="icon">📧</div>
              <h3>Email</h3>
              <p className="highlight">contact@uastf.co.in</p>
              <p className="muted">Official support & enquiries</p>
            </div>

            {/* PHONE */}
            <div className="contact-card">
              <div className="icon">📞</div>
              <h3>Phone</h3>
              <p className="highlight">+91 99563 97012</p>
              <p className="highlight">+91 87569 98280</p>
              <p className="muted">Office: 9:30 AM – 6:00 PM (IST)</p>
            </div>

            {/* SITE ADDRESS - Simplified for layout */}
            <div className="contact-card wide">
              <div className="icon">📍</div>
              <h3>Site Address</h3>
              <p>
                <strong>UAS Testing Foundation</strong><br />
                Hall TP G1 & TP G2, <strong>Technopark@IITK Building</strong><br />
                IIT Kanpur Research & Technology Park Foundation<br />
                Kalyanpur, Kanpur – 208016, UP, India
              </p>
            </div>

            {/* REGISTERED OFFICE */}
            <div className="contact-card wide">
              <div className="icon">🏢</div>
              <h3>Registered Office</h3>
              <p>
                <strong>UAS Testing Foundation</strong><br />
                Transport Aircraft Division, HAL<br />
                Post Box No. 225, Chakeri, Kanpur – 208008, UP
              </p>
            </div>
          </div>

          {/* ================= UPDATED MAP SECTION ================= */}
          <div className="map-wrapper">
            <div className="map-header">
              <h4>Find us on Campus</h4>
              <p>Technopark@IITK Building, Indian Institute of Technology Kanpur</p>
            </div>
            <iframe
              title="Technopark IIT Kanpur Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3569.756185834372!2d80.2283863761358!3d26.51722697688439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c37005f00b821%3A0x9d66cf8a8792edbc!2sTechnopark%40IITK!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: "0 0 8px 8px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* ================= NOTE ================= */}
      <section className="contact-note-section">
        <div className="container">
          <p>
            <strong>Security Notice:</strong> Technopark@IITK is a restricted area. 
            Prior appointment is mandatory for all visitors.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;