import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/Capabilities/Environmental/RainChamber.css";

/* IMAGE */
import rainImg from "../../../assets/capabilities/environmental/rain-chamber.png";

const RainChamber = () => {
  return (
    <div className="rain-page">
      {/* ================= HERO ================= */}
      <section className="rain-hero">
        <div className="container">
          <span className="hero-badge">Environmental Test Facility</span>
          <h1>Rain Test Chamber</h1>
          <p>
            Water ingress, spray and immersion testing facility for enclosure
            protection validation as per <b>IEC 60529 (IPX)</b> standards.
          </p>

          {/* CTA */}
          <div className="hero-cta">
            <Link to="/quotation" className="quote-btn">
              Request Quotation
            </Link>
          </div>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="rain-section">
        <div className="container rain-flex">
          <div className="rain-image">
            <img src={rainImg} alt="Rain Test Chamber" />
          </div>

          <div className="rain-content">
            <h2>Facility Overview</h2>
            <ul>
              <li>
                Simulates water ingress conditions including dripping, spraying
                and immersion
              </li>
              <li>
                Testing as per <b>IEC 60529</b> methods IPX1 to IPX6 and IPX7/8
              </li>
              <li>
                Standardized laboratory procedures for enclosure IP rating
                validation
              </li>
              <li>
                Suitable for environmental qualification of defence and
                aerospace systems
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= TECHNICAL SPECIFICATIONS ================= */}
      <section className="rain-section light">
        <div className="container">
          <h2 className="title-center">Technical Specifications</h2>

          <div className="rain-table-wrapper">
            <table className="rain-table">
              <tbody>
                <tr>
                  <th>Model Number</th>
                  <td>ARC1000IPX1-7</td>
                </tr>
                <tr>
                  <th>Serial Number</th>
                  <td>121411</td>
                </tr>
                <tr>
                  <th>Usable Capacity</th>
                  <td>1000 L</td>
                </tr>
                <tr>
                  <th>Internal Dimensions</th>
                  <td>1000 (W) × 1000 (D) × 1050 (H) mm</td>
                </tr>
                <tr>
                  <th>Ingress Protection Methods</th>
                  <td>IPX1 to IPX6, IPX7 & IPX8</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================= ACCESSORIES ================= */}
      <section className="rain-section">
        <div className="container">
          <h2 className="title-center">Accessories & Test Setups</h2>

          <div className="rain-grid">
            <div className="rain-card">Drip Tank – IPX1 & IPX2</div>
            <div className="rain-card">Spray Nozzles – IPX3 & IPX4</div>
            <div className="rain-card">Jet Spray – IPX5 & IPX6</div>
            <div className="rain-card">Immersion Tank – IPX7 & IPX8</div>
          </div>
        </div>
      </section>

      {/* ================= COMPLIANCE ================= */}
      <section className="rain-section light">
        <div className="container rain-note">
          <p>
            This facility supports ingress protection testing of defence and
            aerospace equipment in accordance with
            <b> IEC 60529 (IPX)</b> standards.
          </p>
        </div>
      </section>
    </div>
  );
};

export default RainChamber;
