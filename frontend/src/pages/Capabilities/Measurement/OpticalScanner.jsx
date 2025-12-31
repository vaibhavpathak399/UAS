import React from "react";
import "../../../styles/Capabilities/Measurement/OpticalScanner.css";

/* IMAGE */
import scannerImg from "../../../assets/capabilities/measurement/optical-scanner.png";

const OpticalScanner = () => {
  return (
    <div className="scan-page">
      {/* ================= HERO ================= */}
      <section className="scan-hero">
        <div className="container">
          <span className="hero-badge">Measurement Facility</span>
          <h1>Optical / 3D Scanner</h1>
          <p>
            Advanced non-contact optical measurement system for precision
            inspection, reverse engineering and rapid prototyping of
            aerospace and defence components.
          </p>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="scan-section">
        <div className="container scan-flex">
          <div className="scan-image">
            <img src={scannerImg} alt="Optical 3D Scanner" />
          </div>

          <div className="scan-content">
            <h2>Facility Overview</h2>
            <ul>
              <li>
                Universal measuring device for scanning objects of wide
                range of shapes and sizes
              </li>
              <li>
                Supports reverse engineering, non-contact quality control
                and rapid prototyping
              </li>
              <li>
                Lightweight construction with modern optical technology
                for easy configuration changes
              </li>
              <li>
                High accuracy measurement for complex geometries
              </li>
              <li>
                Fast scanning capability reducing inspection cycle time
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= CAPABILITIES ================= */}
      <section className="scan-section light">
        <div className="container">
          <h2 className="title-center">Key Capabilities</h2>

          <div className="scan-grid">
            <div className="scan-card">
              <h4>High Accuracy</h4>
              <p>Up to 0.007 mm precision for complex geometries</p>
            </div>

            <div className="scan-card">
              <h4>Fast Scanning</h4>
              <p>Rapid data acquisition reduces inspection cycle time</p>
            </div>

            <div className="scan-card">
              <h4>Portable & Flexible</h4>
              <p>
                Scalable field of view suitable for small to large components
              </p>
            </div>

            <div className="scan-card">
              <h4>Digital Integration</h4>
              <p>
                Generates CAD-compatible 3D models for analysis and
                documentation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= NOTE ================= */}
      <section className="scan-section">
        <div className="container scan-note">
          <p>
            This optical scanning facility supports dimensional inspection,
            digital archiving and reverse engineering of critical aerospace
            and defence components with high accuracy and speed.
          </p>
        </div>
      </section>
    </div>
  );
};

export default OpticalScanner;
