import React from "react";
import "../../../styles/Capabilities/Environmental/TempChamber.css";

/* IMAGE */
import tempImg from "../../../assets/capabilities/environmental/temp-chamber.png";

const TempChamber = () => {
  return (
    <div className="temp-page">
      {/* ================= HERO ================= */}
      <section className="temp-hero">
        <div className="container">
          <span className="hero-badge">Environmental Test Facility</span>
          <h1>Temperature Test Chamber (Hot & Cold)</h1>
          <p>
            High-performance temperature simulation facility for qualification
            and compliance testing as per
            <b> MIL-STD-810 (Methods 501 & 502)</b>.
          </p>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="temp-section">
        <div className="container temp-flex">
          <div className="temp-image">
            <img src={tempImg} alt="Temperature Test Chamber" />
          </div>

          <div className="temp-content">
            <h2>Facility Overview</h2>
            <ul>
              <li>
                Simulates extreme hot and cold temperature conditions as per
                MIL-STD-810 Methods 501 & 502
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
      <section className="temp-section light">
        <div className="container">
          <h2 className="title-center">Technical Specifications</h2>

          <div className="temp-table-wrapper">
            <table className="temp-table">
              <tbody>
                <tr>
                  <th>Model Number</th>
                  <td>PAC540B2017</td>
                </tr>
                <tr>
                  <th>Serial Number</th>
                  <td>121426</td>
                </tr>
                <tr>
                  <th>Usable Capacity</th>
                  <td>540 L</td>
                </tr>
                <tr>
                  <th>Internal Dimensions</th>
                  <td>800 (W) × 750 (D) × 900 (H) mm</td>
                </tr>
                <tr>
                  <th>Temperature Range</th>
                  <td>-70 °C to 180 °C</td>
                </tr>
                <tr>
                  <th>Temperature Accuracy</th>
                  <td>±1 °C</td>
                </tr>
                <tr>
                  <th>Heating Rate</th>
                  <td>15 °C / minute</td>
                </tr>
                <tr>
                  <th>Cooling Rate</th>
                  <td>15 °C / minute</td>
                </tr>
                <tr>
                  <th>Temperature Gradient</th>
                  <td>&lt; 1.5 °C</td>
                </tr>
                <tr>
                  <th>Humidity Range</th>
                  <td>15 % RH to 95 % RH</td>
                </tr>
                <tr>
                  <th>Humidity Fluctuation</th>
                  <td>±3 % RH</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================= COMPLIANCE ================= */}
      <section className="temp-section">
        <div className="container temp-note">
          <p>
            This facility enables environmental qualification testing of defence
            and aerospace systems in accordance with
            <b> MIL-STD-810 (Methods 501 & 502)</b>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default TempChamber;
