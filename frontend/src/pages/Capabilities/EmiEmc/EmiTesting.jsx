import React, { useEffect } from "react";
import "../../../styles/Capabilities/EmiEmc/EmiTesting.css";

/* IMAGES */
import anechoic from "../../../assets/capabilities/emi-emc/emi-setup.png";
import control from "../../../assets/capabilities/emi-emc/emi-layout.png";
import diagram from "../../../assets/capabilities/emi-emc/emi-table.png";
import tabletop1 from "../../../assets/capabilities/emi-emc/emi1.png";
import tabletop2 from "../../../assets/capabilities/emi-emc/emi2.png";

const EmiTesting = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="emi-premium-page">
      {/* --- HERO --- */}
      <section className="emi-hero-dark">
        <div className="container">
          <span className="emi-badge">MIL-STD-461G COMPLIANT</span>
          <h1>EMI / EMC Testing Facility</h1>
          <div className="emi-h-line"></div>
          <p>Advanced Electromagnetic Interference & Compatibility testing infrastructure for defence and aerospace platforms.</p>
        </div>
      </section>

      {/* --- FACILITY GRID --- */}
      <section className="emi-visual-section">
        <div className="container">
          <div className="emi-main-grid">
            <div className="emi-visual-card">
              <img src={anechoic} alt="Anechoic Chamber" />
              <div className="card-tag">Anechoic Chamber</div>
            </div>
            <div className="emi-visual-card">
              <img src={control} alt="Control Station" />
              <div className="card-tag">Control Station</div>
            </div>
            <div className="emi-visual-card">
              <img src={diagram} alt="Test Layout" />
              <div className="card-tag">EMI / EMC Test Layout</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- HIGHLIGHTS --- */}
      <section className="emi-info-bar">
        <div className="container">
          <div className="highlights-wrapper">
            <div className="h-item"><strong>19 Types</strong><p>MIL-STD-461G Tests</p></div>
            <div className="h-item"><strong>7.5m × 6.1m</strong><p>SAC Dimensions</p></div>
            <div className="h-item"><strong>2 ft³</strong><p>EUT Capacity</p></div>
            <div className="h-item"><strong>8 Tests</strong><p>Inside SAC Chamber</p></div>
          </div>
        </div>
      </section>

      {/* --- RADIATED & CONDUCTED --- */}
      <section className="emi-data-section">
        <div className="container">
          <h2 className="table-title">Radiated & Conducted EMI / EMC Tests</h2>
          <div className="emi-table-box">
            <table className="modern-emi-table">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Test Code</th>
                  <th>Description & Frequency Range</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>01</td><td className="code">CE101</td><td>Conducted Emissions, Power Leads (30 Hz – 10 kHz)</td></tr>
                <tr><td>02</td><td className="code">CE102</td><td>Conducted Emissions, Power Leads (10 kHz – 10 MHz)</td></tr>
                <tr><td>03</td><td className="code">CE106</td><td>Conducted Emissions, Antenna Terminal (10 kHz – 40 GHz)</td></tr>
                <tr><td>04</td><td className="code">RE101</td><td>Radiated Emissions, Magnetic Field (30 Hz – 100 kHz)</td></tr>
                <tr><td>05</td><td className="code">RE102</td><td>Radiated Emissions, Electric Field (10 kHz – 18 GHz)</td></tr>
                <tr><td>06</td><td className="code">RE103</td><td>Radiated Emissions, Spurious & Harmonics (10 kHz – 40 GHz)</td></tr>
                <tr><td>07</td><td className="code">RS101</td><td>Radiated Susceptibility, Magnetic Field</td></tr>
                <tr><td>08</td><td className="code">RS103</td><td>Radiated Susceptibility, Electric Field (2 MHz – 40 GHz)</td></tr>
                <tr><td>09</td><td className="code">RS105</td><td>Radiated Susceptibility, Transient Electromagnetic Field</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* --- TABLE TOP TESTS --- */}
      <section className="emi-data-section light-bg">
        <div className="container">
          <h2 className="table-title">Table-Top Conducted Susceptibility Tests</h2>
          
          <div className="emi-dual-images">
            <div className="dual-img-frame"><img src={tabletop1} alt="Setup" /></div>
            <div className="dual-img-frame"><img src={tabletop2} alt="Measurement" /></div>
          </div>

          <div className="emi-table-box">
            <table className="modern-emi-table alternative">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Test Code</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>01</td><td className="code">CS101</td><td>Power Leads (30 Hz – 150 kHz)</td></tr>
                <tr><td>02</td><td className="code">CS103</td><td>Antenna Port Intermodulation (15 kHz – 10 GHz)</td></tr>
                <tr><td>03</td><td className="code">CS104</td><td>Rejection of Undesired Signals (30 Hz – 20 GHz)</td></tr>
                <tr><td>04</td><td className="code">CS105</td><td>Cross-Modulation (30 Hz – 20 GHz)</td></tr>
                <tr><td>05</td><td className="code">CS109</td><td>Structure Current (60 Hz – 100 kHz)</td></tr>
                <tr><td>06</td><td className="code">CS114</td><td>Bulk Cable Injection (10 kHz – 200 MHz)</td></tr>
                <tr><td>07</td><td className="code">CS115</td><td>Impulse Excitation</td></tr>
                <tr><td>08</td><td className="code">CS116</td><td>Damped Sinusoidal Transients</td></tr>
                <tr><td>09</td><td className="code">CS117</td><td>Lightning Induced Transients</td></tr>
                <tr><td>10</td><td className="code">CS118</td><td>Personnel Borne Electrostatic Discharge</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmiTesting;