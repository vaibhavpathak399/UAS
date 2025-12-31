import React, { useEffect } from "react";
import "../../../styles/Capabilities/Dynamic/Gcs.css";

/* IMAGES - Paths same rakhe hain */
import gcsImg from "../../../assets/capabilities/dynamic/gcs.png";
import gcsInteriorImg from "../../../assets/capabilities/dynamic/gcs-interior.png";
import mgcsImg from "../../../assets/capabilities/dynamic/mgcs-van.png";

const Gcs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="gcs-clean-page">
      {/* 1. Simple Hero */}
      <section className="gcs-simple-hero">
        <div className="container">
          <span className="simple-badge">Dynamic Test Facility</span>
          <h1>Ground Control Station (GCS)</h1>
          <p>
            Advanced ground and mobile control infrastructure for command,
            control, communication, telemetry and mission operations of
            Unmanned Aerial Systems (UAS).
          </p>
        </div>
      </section>

      {/* 2. Static GCS Section */}
      <section className="content-row">
        <div className="container flex-box">
          <div className="media-side">
            <img src={gcsImg} alt="Ground Control Station" className="bordered-img" />
          </div>
          <div className="text-side">
            <h2 className="title-blue">Ground Control Station (GCS)</h2>
            <div className="divider-left"></div>
            <ul className="point-list">
              <li>Long, mid and short-range communication radio systems</li>
              <li>Easy deployment mast for radio and antenna setup</li>
              <li>Ruggedized laptops and operational tools</li>
              <li>Secure command, control and telemetry monitoring</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Interior Section (Light Background) */}
      <section className="content-row bg-light">
        <div className="container flex-box reverse">
          <div className="media-side">
            <img src={gcsInteriorImg} alt="GCS Interior" className="bordered-img" />
          </div>
          <div className="text-side">
            <h2 className="title-blue">GCS Interior & Operations</h2>
            <div className="divider-left"></div>
            <ul className="point-list">
              <li>High-end dual screen operational displays</li>
              <li>Real-time telemetry and data acquisition systems</li>
              <li>Ergonomic operator console for extended missions</li>
              <li>Mission planning, logging and analysis tools</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. MGCS Section */}
      <section className="content-row">
        <div className="container flex-box">
          <div className="media-side">
            <img src={mgcsImg} alt="Mobile Ground Control Station" className="bordered-img" />
          </div>
          <div className="text-side">
            <h2 className="title-blue">Mobile Ground Control Station (MGCS)</h2>
            <div className="divider-left"></div>
            <ul className="point-list grid-list">
              <li>Long-range communication radio system</li>
              <li>Backup data telemetry radio</li>
              <li>Built-in RTK base station</li>
              <li>Mast-mounted antenna and antenna tracker</li>
              <li>Data acquisition and wind sensing equipment</li>
              <li>1500W drone battery charging system</li>
              <li>Onboard power generator and external power supply</li>
              <li>Air-conditioned mobile command unit</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gcs;