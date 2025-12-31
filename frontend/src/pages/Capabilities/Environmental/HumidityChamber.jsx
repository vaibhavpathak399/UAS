import React from "react";
import "../../../styles/Capabilities/Environmental/HumidityChamber.css";

/* IMAGE */
import humidityImg from "../../../assets/capabilities/environmental/humidity-chamber.png";

const HumidityChamber = () => {
  return (
    <div className="humidity-page">
      {/* ================= HERO ================= */}
      <section className="humidity-hero">
        <div className="container">
          <span className="hero-badge">Environmental Test Facility</span>
          <h1>Humidity Test Chamber</h1>
          <p>
            Simulation of extreme moisture and temperature conditions for
            environmental qualification testing as per
            <b> MIL-STD-810 (Method 507)</b>.
          </p>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="humidity-section">
        <div className="container humidity-flex">
          <div className="humidity-image">
            <img src={humidityImg} alt="Humidity Test Chamber" />
          </div>

          <div className="humidity-content">
            <h2>Facility Overview</h2>
            <ul>
              <li>
                Simulates extreme humidity and moisture conditions as per
                MIL-STD-810 Method 507
              </li>
              <li>MIL-STD-810 certified performance</li>
              <li>Digital sensors for real-time temperature tracking</li>
              <li>Automated logging for compliance documentation</li>
              <li>Alarm systems for deviation alerts</li>
              <li>Fully programmable test cycles</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= TECHNICAL SPECIFICATIONS ================= */}
      <section className="humidity-section light">
        <div className="container">
          <h2 className="title-center">Technical Specifications</h2>

          <div className="humidity-table-wrapper">
            <table className="humidity-table">
              <tbody>
                <tr>
                  <th>Model Number</th>
                  <td>PAC500B96</td>
                </tr>
                <tr>
                  <th>Serial Number</th>
                  <td>121409</td>
                </tr>
                <tr>
                  <th>Usable Capacity</th>
                  <td>500 L</td>
                </tr>
                <tr>
                  <th>Internal Dimensions</th>
                  <td>800 (W) × 700 (D) × 900 (H) mm</td>
                </tr>
                <tr>
                  <th>Temperature Range</th>
                  <td>-70 °C to 180 °C</td>
                </tr>
                <tr>
                  <th>Humidity Range</th>
                  <td>10 % RH to 97 % RH</td>
                </tr>
                <tr>
                  <th>Accuracy</th>
                  <td>±1 °C & ±3 % RH</td>
                </tr>
                <tr>
                  <th>Heating / Cooling Ramp Rate</th>
                  <td>5 °C / minute</td>
                </tr>
                <tr>
                  <th>Time to Achieve 95 % Humidity</th>
                  <td>15 Minutes (Maximum)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================= COMPLIANCE ================= */}
      <section className="humidity-section">
        <div className="container humidity-note">
          <p>
            This facility supports environmental qualification testing for
            defence and aerospace systems in accordance with
            <b> MIL-STD-810 (Method 507)</b>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HumidityChamber;
