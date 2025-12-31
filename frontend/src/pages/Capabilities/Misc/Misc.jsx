import React from "react";
import "../../../styles/Capabilities/Misc/Misc.css";

/* IMAGES */
import clampImg from "../../../assets/capabilities/misc/clamp-tester.png";
import insulationImg from "../../../assets/capabilities/misc/insulation-tester.png";
import earthImg from "../../../assets/capabilities/misc/earth-tester.png";

const Misc = () => {
  return (
    <div className="misc-page">
      {/* ================= HERO ================= */}
      <section className="misc-hero">
        <div className="container">
          <span className="hero-badge">Electrical & Safety Testing</span>
          <h1>Miscellaneous Testing Instruments</h1>
          <p>
            Electrical safety and grounding verification instruments supporting
            compliance testing, diagnostics and preventive maintenance for
            aerospace and defence systems.
          </p>
        </div>
      </section>

      {/* ================= CLAMP TESTER ================= */}
      <section className="misc-section">
        <div className="container misc-flex">
          <div className="misc-image">
            <img src={clampImg} alt="Clamp Tester" />
          </div>

          <div className="misc-content">
            <h2>Clamp Tester</h2>
            <table className="misc-table">
              <tbody>
                <tr><th>Model Number</th><td>3280-20</td></tr>
                <tr><th>Make</th><td>HIOKI</td></tr>
                <tr><th>Serial Number</th><td>250321478</td></tr>
                <tr>
                  <th>Description</th>
                  <td>
                    Measures AC/DC current to evaluate electrical system
                    performance and detect abnormalities.
                  </td>
                </tr>
                <tr><th>AC / DC Current Range</th><td>Up to 1000 A</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================= INSULATION TESTER ================= */}
      <section className="misc-section light">
        <div className="container misc-flex reverse">
          <div className="misc-image">
            <img src={insulationImg} alt="Insulation Tester" />
          </div>

          <div className="misc-content">
            <h2>Insulation Tester</h2>
            <table className="misc-table">
              <tbody>
                <tr><th>Model Number</th><td>MIC15K1</td></tr>
                <tr><th>Make</th><td>Sonel</td></tr>
                <tr><th>Serial Number</th><td>M30480</td></tr>
                <tr>
                  <th>Description</th>
                  <td>
                    Measures the resistance of electrical insulation to detect
                    faults, degradation and leakage paths.
                  </td>
                </tr>
                <tr><th>Test Voltage Range</th><td>Up to 15 kV</td></tr>
                <tr><th>Measurement Range</th><td>10 kΩ to 35 TΩ</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================= EARTH TESTER ================= */}
      <section className="misc-section">
        <div className="container misc-flex">
          <div className="misc-image">
            <img src={earthImg} alt="Earth Tester" />
          </div>

          <div className="misc-content">
            <h2>Earth Tester</h2>
            <table className="misc-table">
              <tbody>
                <tr><th>Model Number</th><td>FT6041</td></tr>
                <tr><th>Make</th><td>HIOKI</td></tr>
                <tr><th>Serial Number</th><td>250599627</td></tr>
                <tr>
                  <th>Description</th>
                  <td>
                    Measures earth resistance and verifies grounding integrity
                    to ensure electrical safety and system reliability.
                  </td>
                </tr>
                <tr>
                  <th>Measurement Method</th>
                  <td>2-Pole, 3-Pole & 4-Pole Methods</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Misc;
