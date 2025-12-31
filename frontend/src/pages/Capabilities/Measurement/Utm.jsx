import React from "react";
import "../../../styles/Capabilities/Measurement/Utm.css";

/* IMAGE */
import utmImg from "../../../assets/capabilities/measurement/utm.png";

const Utm = () => {
  return (
    <div className="utm-page">
      {/* ================= HERO ================= */}
      <section className="utm-hero">
        <div className="container">
          <span className="hero-badge">Measurement Facility</span>
          <h1>Universal Testing Machine (UTM)</h1>
          <p>
            Multi-purpose mechanical testing facility for evaluation of
            strength, durability and performance of metallic and
            non-metallic materials.
          </p>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="utm-section">
        <div className="container utm-flex">
          <div className="utm-image">
            <img src={utmImg} alt="Universal Testing Machine" />
          </div>

          <div className="utm-content">
            <h2>Facility Overview</h2>
            <ul>
              <li>
                Performs tensile, compression, bending, shear and peel tests
              </li>
              <li>
                Suitable for metallic and non-metallic sheets, tubes and
                springs
              </li>
              <li>
                High-accuracy load measurement with precision within ±1 %
              </li>
              <li>
                Computer-integrated digital control and data acquisition
              </li>
              <li>
                Interchangeable grips and fixtures for wide material coverage
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= TECHNICAL SPECIFICATIONS ================= */}
      <section className="utm-section light">
        <div className="container">
          <h2 className="title-center">Technical Specifications</h2>

          <div className="utm-table-wrapper">
            <table className="utm-table">
              <tbody>
                <tr>
                  <th>Load Capacity</th>
                  <td>50 kN</td>
                </tr>
                <tr>
                  <th>Load Measurement Accuracy</th>
                  <td>±1 %</td>
                </tr>
                <tr>
                  <th>Height of Test Area</th>
                  <td>≥ 1250 mm</td>
                </tr>
                <tr>
                  <th>Width of Test Area</th>
                  <td>≥ 500 mm</td>
                </tr>
                <tr>
                  <th>Control System</th>
                  <td>Digital, Computer-integrated</td>
                </tr>
                <tr>
                  <th>Supported Test Types</th>
                  <td>
                    Tensile, Compression, Bending, Shear and Peel Tests
                  </td>
                </tr>
                <tr>
                  <th>Grips & Fixtures</th>
                  <td>
                    Interchangeable fixtures for metals, polymers,
                    composites and textiles
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================= NOTE ================= */}
      <section className="utm-section">
        <div className="container utm-note">
          <p>
            This facility supports mechanical characterization, material
            qualification and performance evaluation for aerospace,
            defence and industrial applications.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Utm;
