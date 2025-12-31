import React, { useEffect } from "react";
import "../../../styles/Capabilities/Electrical/PowerVariation.css";

/* IMAGE */
import powerImg from "../../../assets/capabilities/electrical/power-variation.png";

const ldcTests = [
  "LDC-101", "LDC-102", "LDC-105", "LDC-201",
  "LDC-301", "LDC-302", "LDC-401", "LDC-501",
  "LDC-601", "LDC-602", "LDC-103", "LDC-104",
];

const PowerVariation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pv-premium-page">
      {/* --- HERO --- */}
      <section className="pv-hero-minimal">
        <div className="container">
          <span className="facility-tag">Electrical Test Facility</span>
          <h1>Power Supply Variation Facility</h1>
          <div className="title-divider"></div>
          <p>
            Full-spectrum electrical power compliance testing for aerospace systems 
            as per <strong>MIL-STD-704F</strong> standards.
          </p>
        </div>
      </section>

      {/* --- OVERVIEW & IMAGE --- */}
      <section className="pv-content-section">
        <div className="container">
          <div className="pv-main-grid">
            <div className="pv-image-box">
              <img src={powerImg} alt="Power Variation Setup" />
              <div className="img-caption">Integrated AC/DC Power Testing Rig</div>
            </div>
            
            <div className="pv-text-box">
              <h2 className="sub-heading">Facility Overview</h2>
              <ul className="feature-points">
                <li>Comprehensive AC / DC power sources with wave generators.</li>
                <li>Equipped with high-precision load banks and control software.</li>
                <li>Simulates voltage sags, frequency shifts, and transients.</li>
                <li>Supports rigorous qualification for airborne electrical systems.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- COVERAGE GRID --- */}
      <section className="pv-coverage-section">
        <div className="container">
          <h2 className="section-title">System Coverage</h2>
          <div className="coverage-grid">
            <div className="coverage-item">
              <h4>SAC</h4>
              <p>AC Single Phase<br/>115V / 400Hz</p>
            </div>
            <div className="coverage-item">
              <h4>TAC</h4>
              <p>AC Three Phase<br/>115V / 400Hz</p>
            </div>
            <div className="coverage-item">
              <h4>SVF / TVF</h4>
              <p>Variable Frequency<br/>AC Systems</p>
            </div>
            <div className="coverage-item">
              <h4>DC Power</h4>
              <p>28V & 270V<br/>Standard Systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CAPABILITY TABLE --- */}
      <section className="pv-table-section">
        <div className="container">
          <div className="table-header">
            <h2 className="section-title">LDC Test Capability</h2>
            <p>Total of 12 types of LDC table tests supported as per aerospace standards.</p>
          </div>
          
          <div className="pv-table-container">
            <table className="capability-table">
              <thead>
                <tr>
                  <th>Sr. No.</th>
                  <th>LDC Test Type</th>
                  <th>Test Method / Compliance</th>
                </tr>
              </thead>
              <tbody>
                {ldcTests.map((test, index) => (
                  <tr key={index}>
                    <td>{(index + 1).toString().padStart(2, '0')}</td>
                    <td className="test-name">{test}</td>
                    <td>Compliance Table Test</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="pv-footer-note">
            * All tests are conducted under calibrated lab conditions following MIL-SPEC protocols.
          </div>
        </div>
      </section>
    </div>
  );
};

export default PowerVariation;