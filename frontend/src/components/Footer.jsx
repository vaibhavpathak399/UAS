import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="uastf-footer">

      {/* ================= MAIN FOOTER ================= */}
      <div className="footer-container">

        {/* ABOUT */}
        <div className="footer-col">
          <h3>UAS Testing Foundation</h3>
          <p className="footer-subtitle">
(Incorporated under Section-8 of the Companies Act, 2013)
          </p>
                    <p>
            <strong>Location:</strong><br />
UAS Testing Foundation  Hall TP G1 & TP G2 <br />
(Technopark@iitk Building) <br />
Indian Institute of Technology, Kalyanpur <br />
Kanpur – 208016, Uttar Pradesh, India

          </p>
          

        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/capabilities">Capabilities</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* IMPORTANT */}
        <div className="footer-col">
          <h4>Important</h4>
          <ul className="footer-links">
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/tenders">Tenders</Link></li>
            <li><Link to="/quotation">Request Quotation</Link></li>
            <li><Link to="/investors">Gallery</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h4>Contact Information</h4>
          <p><strong>Email:</strong> contact@uastf.co.in</p>
          <p>
            <strong>Phone:</strong><br />
            +91-9956397012<br />
            +91-8756998280
          </p>

        </div>

      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} UAS Testing Foundation |
          Official Website of a Section-8 Company under Ministry of Defence, Govt. of India
        </p>
      </div>

    </footer>
  );
};

export default Footer;
