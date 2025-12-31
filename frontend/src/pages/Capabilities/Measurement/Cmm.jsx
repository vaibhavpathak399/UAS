import React from "react";
import "../../../styles/Capabilities/Measurement/Cmm.css";

/* IMAGE */
import cmmImg from "../../../assets/capabilities/measurement/cmm.png";

const Cmm = () => {
  return (
    <div className="cmm-page">
      {/* ================= HERO ================= */}
      <section className="cmm-hero">
        <div className="container">
          <span className="hero-badge">Measurement Facility</span>
          <h1>Coordinate Measuring Machine (CMM)</h1>
          <p>
            High-precision dimensional inspection and geometric tolerance
            measurement facility for aerospace and defence components.
          </p>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="cmm-section">
        <div className="container cmm-flex">
          <div className="cmm-image">
            <img src={cmmImg} alt="Coordinate Measuring Machine" />
          </div>

          <div className="cmm-content">
            <h2>Facility Overview</h2>
            <ul>
              <li>Geometric dimensioning and tolerance (GD&T) measurement</li>
              <li>3-axis bridge type CMM with CNC control</li>
              <li>High-accuracy inspection for precision components</li>
              <li>Compact scanning probe system for complex geometries</li>
              <li>Suitable for aerospace, defence and precision manufacturing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= TECHNICAL SPECIFICATIONS ================= */}
      <section className="cmm-section light">
        <div className="container">
          <h2 className="title-center">Technical Specifications</h2>

          <div className="cmm-table-wrapper">
            <table className="cmm-table">
              <tbody>
                <tr>
                  <th>Model Number</th>
                  <td>Spectra 8.10.6</td>
                </tr>
                <tr>
                  <th>Serial Number</th>
                  <td>2196</td>
                </tr>
                <tr>
                  <th>Machine Type</th>
                  <td>3-Axis, Bridge Type, CNC Controlled</td>
                </tr>
                <tr>
                  <th>Measuring Range (X)</th>
                  <td>800 mm</td>
                </tr>
                <tr>
                  <th>Measuring Range (Y)</th>
                  <td>1000 mm</td>
                </tr>
                <tr>
                  <th>Measuring Range (Z)</th>
                  <td>600 mm</td>
                </tr>
                <tr>
                  <th>Length Measurement Accuracy</th>
                  <td>1.7 microns</td>
                </tr>
                <tr>
                  <th>Resolution</th>
                  <td>0.1 micron</td>
                </tr>
                <tr>
                  <th>Probe System</th>
                  <td>Compact scanning probe system</td>
                </tr>
                <tr>
                  <th>Software</th>
                  <td>
                    PTB certified geometric measuring software with auto
                    ballooning for FAI
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================= NOTE ================= */}
      <section className="cmm-section">
        <div className="container cmm-note">
          <p>
            This facility enables high-precision dimensional inspection,
            geometric tolerance analysis and First Article Inspection (FAI)
            for critical aerospace and defence components.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Cmm;
