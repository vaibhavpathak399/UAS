import React from "react";
import "../../../styles/Capabilities/Environmental/ThermalShock.css";

/* IMAGE */
import thermalImg from "../../../assets/capabilities/environmental/thermal-shock.png";

const ThermalShock = () => {
  return (
    <div className="ts-page">
      {/* ================= HERO ================= */}
      <section className="ts-hero">
        <div className="container">
          <span className="hero-badge">Environmental Test Facility</span>
          <h1>Thermal Shock Test Chamber</h1>
          <p>
            Rapid temperature transition testing facility for defence and
            aerospace components as per
            <b> MIL-STD-810 (Method 503)</b>.
          </p>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="ts-section">
        <div className="container ts-flex">
          <div className="ts-image">
            <img src={thermalImg} alt="Thermal Shock Chamber" />
          </div>

          <div className="ts-content">
            <h2>Facility Overview</h2>
            <ul>
              <li>
                Simulates extreme thermal shock conditions in accordance with
                MIL-STD-810 Method 503
              </li>
              <li>MIL-STD-810 certified performance</li>
              <li>Digital sensors for real-time temperature monitoring</li>
              <li>Automated data logging for compliance documentation</li>
              <li>Alarm systems for deviation alerts</li>
              <li>Fully programmable test cycles</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= TECHNICAL SPECIFICATIONS ================= */}
      <section className="ts-section light">
        <div className="container">
          <h2 className="title-center">Technical Specifications</h2>

          <div className="ts-table-wrapper">
            <table className="ts-table">
              <tbody>
                <tr>
                  <th>Model Number</th>
                  <td>KTS216B118</td>
                </tr>
                <tr>
                  <th>Serial Number</th>
                  <td>121412</td>
                </tr>
                <tr>
                  <th>Test Space Dimensions</th>
                  <td>800 (W) × 800 (D) × 850 (H) mm</td>
                </tr>
                <tr>
                  <th>Hot Zone Temperature Range</th>
                  <td>+50 °C to +200 °C</td>
                </tr>
                <tr>
                  <th>Cold Zone Temperature Range</th>
                  <td>+50 °C to −70 °C</td>
                </tr>
                <tr>
                  <th>Heating Rate (Hot Zone)</th>
                  <td>10 °C / minute</td>
                </tr>
                <tr>
                  <th>Heating Rate (Cold Zone)</th>
                  <td>1 °C / minute</td>
                </tr>
                <tr>
                  <th>Cooling Rate (Cold Zone)</th>
                  <td>5 °C / minute</td>
                </tr>
                <tr>
                  <th>Temperature Stabilization (Hot ↔ Cold)</th>
                  <td>Within 5 minutes</td>
                </tr>
                <tr>
                  <th>Temperature Accuracy</th>
                  <td>±1 °C</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================= COMPLIANCE ================= */}
      <section className="ts-section">
        <div className="container ts-note">
          <p>
            This facility enables rapid temperature transition testing for
            defence and aerospace equipment in compliance with
            <b> MIL-STD-810 (Method 503)</b>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ThermalShock;
