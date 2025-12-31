import React from "react";
import "../../../styles/Capabilities/Environmental/SaltSpray.css";

/* IMAGE */
import saltImg from "../../../assets/capabilities/environmental/salt-spray.png";

const SaltSpray = () => {
  return (
    <div className="salt-page">
      {/* ================= HERO ================= */}
      <section className="salt-hero">
        <div className="container">
          <span className="hero-badge">Environmental Test Facility</span>
          <h1>Salt Spray Test Chamber</h1>
          <p>
            Corrosion resistance and durability testing facility for defence
            and aerospace components as per
            <b> MIL-STD-810H (Method 509.7)</b>.
          </p>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="salt-section">
        <div className="container salt-flex">
          <div className="salt-image">
            <img src={saltImg} alt="Salt Spray Test Chamber" />
          </div>

          <div className="salt-content">
            <h2>Facility Overview</h2>
            <ul>
              <li>
                Simulates corrosive salt spray environment as per
                MIL-STD-810H Method 509.7
              </li>
              <li>MIL-STD-810H certified performance</li>
              <li>
                Corrosion-resistant polypropylene / fiberglass chamber body
              </li>
              <li>Digital temperature and humidity control system</li>
              <li>Fully programmable test cycles</li>
              <li>
                Suitable for qualification testing of metallic and coated
                components
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= TECHNICAL SPECIFICATIONS ================= */}
      <section className="salt-section light">
        <div className="container">
          <h2 className="title-center">Technical Specifications</h2>

          <div className="salt-table-wrapper">
            <table className="salt-table">
              <tbody>
                <tr>
                  <th>Model Number</th>
                  <td>SF450</td>
                </tr>
                <tr>
                  <th>Serial Number</th>
                  <td>121453</td>
                </tr>
                <tr>
                  <th>Operating Temperature Range</th>
                  <td>0 °C to 100 °C</td>
                </tr>
                <tr>
                  <th>Temperature Accuracy</th>
                  <td>±1 °C</td>
                </tr>
                <tr>
                  <th>Test Space (Without Hood)</th>
                  <td>519 L (850 W × 730 D × 820 H) mm</td>
                </tr>
                <tr>
                  <th>Test Space (With Hood)</th>
                  <td>868 L (850 W × 730 D × 1300 H) mm</td>
                </tr>
                <tr>
                  <th>Salt Spray Test</th>
                  <td>Minimum Temperature: 5 °C</td>
                </tr>
                <tr>
                  <th>Dry Cycle Test</th>
                  <td>Minimum Temperature: 60 °C</td>
                </tr>
                <tr>
                  <th>Humidity Cycle Test</th>
                  <td>20 % to 30 % RH at 60 °C (±1 °C)</td>
                </tr>
                <tr>
                  <th>Temperature Fluctuation</th>
                  <td>±1 °C</td>
                </tr>
                <tr>
                  <th>Humidity Fluctuation</th>
                  <td>±3 % RH</td>
                </tr>
                <tr>
                  <th>Fog Fallout Rate</th>
                  <td>0.5 to 2.5 ml / 80 cm² / hour</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================= COMPLIANCE ================= */}
      <section className="salt-section">
        <div className="container salt-note">
          <p>
            This facility enables corrosion and environmental durability
            testing of defence and aerospace systems in compliance with
            <b> MIL-STD-810H (Method 509.7)</b>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default SaltSpray;
