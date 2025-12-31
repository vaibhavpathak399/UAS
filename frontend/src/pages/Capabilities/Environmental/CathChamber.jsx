import React from "react";
import "../../../styles/Capabilities/Environmental/CathChamber.css";

/* IMAGE */
import cathImg from "../../../assets/capabilities/environmental/cath-chamber.png";

const CathChamber = () => {
  return (
    <div className="cath-page">
      {/* ================= HERO ================= */}
      <section className="cath-hero">
        <div className="container">
          <span className="hero-badge">Environmental Test Facility</span>
          <h1>Climatic Altitude Test Chamber (CATH)</h1>
          <p>
            Simulation of extreme climatic, altitude and vacuum conditions
            for qualification and compliance testing as per
            <b> MIL-STD-810</b>.
          </p>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="cath-section">
        <div className="container cath-flex">
          <div className="cath-image">
            <img src={cathImg} alt="Climatic Altitude Test Chamber" />
          </div>

          <div className="cath-content">
            <h2>Facility Overview</h2>
            <ul>
              <li>Simulates extreme environmental and altitude conditions</li>
              <li>MIL-STD-810 certified performance</li>
              <li>Digital sensors for real-time temperature monitoring</li>
              <li>Automated data logging for compliance documentation</li>
              <li>Alarm systems for deviation and safety alerts</li>
              <li>Fully programmable test cycles</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= TECHNICAL SPECIFICATIONS ================= */}
      <section className="cath-section light">
        <div className="container">
          <h2 className="title-center">Technical Specifications</h2>

          <div className="cath-table-wrapper">
            <table className="cath-table">
              <tbody>
                <tr>
                  <th>Model Number</th>
                  <td>AT500B151210mbar</td>
                </tr>
                <tr>
                  <th>Serial Number</th>
                  <td>121410</td>
                </tr>
                <tr>
                  <th>Usable Capacity</th>
                  <td>504 L</td>
                </tr>
                <tr>
                  <th>Internal Dimensions</th>
                  <td>700 (W) × 780 (D) × 900 (H) mm</td>
                </tr>
                <tr>
                  <th>Temperature Range</th>
                  <td>-70 °C to +180 °C</td>
                </tr>
                <tr>
                  <th>Temperature Accuracy</th>
                  <td>±1 °C</td>
                </tr>
                <tr>
                  <th>Heating / Cooling Ramp Rate</th>
                  <td>5 °C / minute</td>
                </tr>
                <tr>
                  <th>Humidity Range</th>
                  <td>15 % RH to 95 % RH</td>
                </tr>
                <tr>
                  <th>Humidity Fluctuation</th>
                  <td>±3 % RH</td>
                </tr>
                <tr>
                  <th>Vacuum Rate (Ambient Pressure to 10 mbar)</th>
                  <td>≤ 20 minutes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================= COMPLIANCE ================= */}
      <section className="cath-section">
        <div className="container cath-note">
          <p>
            This facility supports environmental qualification testing in
            accordance with <b>MIL-STD-810</b> for defence and aerospace
            systems, subsystems and components.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CathChamber;
