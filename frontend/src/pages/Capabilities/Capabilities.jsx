import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/Capabilities/Capabilities.css";

/* ================= ASSETS ================= */
import cath from "../../assets/capabilities/environmental/cath-chamber.png";
import thermal from "../../assets/capabilities/environmental/thermal-shock.png";
import rain from "../../assets/capabilities/environmental/rain-chamber.png";
import humidity from "../../assets/capabilities/environmental/humidity-chamber.png";
import salt from "../../assets/capabilities/environmental/salt-spray.png";
import temp from "../../assets/capabilities/environmental/temp-chamber.png";

import powervariation from "../../assets/capabilities/electrical/power-variation.png";
import emi from "../../assets/capabilities/emi-emc/emi-setup.png";
import mso from "../../assets/capabilities/MsoAnalyzer/Mso.png";

import gcs from "../../assets/capabilities/dynamic/mgcs-van.png";

import utm from "../../assets/capabilities/measurement/utm.png";
import cmm from "../../assets/capabilities/measurement/cmm.png";
import scanner from "../../assets/capabilities/measurement/optical-scanner.png";

import misc from "../../assets/capabilities/misc/clamp-tester.png";

/* ================================================= */

const Capabilities = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="gov-premium-page">

      {/* ================= HERO ================= */}
      <section className="gov-hero-banner">
        <div className="gov-container">
          <h1>Testing Capabilities</h1>
          <p>State-of-the-art testing infrastructure as per MIL Standards.</p>
        </div>
      </section>

      {/* ================= OFFICIAL INFRASTRUCTURE TABLE ================= */}
      <section className="gov-table-section">
        <div className="gov-container">
          <div className="modern-table-card">
            <div className="gov-table-responsive">

              <table className="official-data-table">
                <thead>
                  <tr>
                    <th className="col-sl">Sl. No.</th>
                    <th>Testing Category</th>
                    <th>Infrastructure / Equipment</th>
                  </tr>
                </thead>

                <tbody>

                  <Group title="Environmental Testing" />
                  <TableRow no="1" cat="Environmental" item="Climate Altitude Chamber (CATH)" />
                  <TableRow no="2" cat="Environmental" item="Humidity Chamber" />
                  <TableRow no="3" cat="Environmental" item="Temperature Chamber" />
                  <TableRow no="4" cat="Environmental" item="Rain Drip Test Chamber" />
                  <TableRow no="5" cat="Environmental" item="Thermal Shock Chamber" />
                  <TableRow no="6" cat="Environmental" item="Salt Spray Test Equipment" />

                  <Group title="Power Supply Equipment" />
                  <TableRow no="7" cat="Electrical" item="Power Supply Equipment" />

                  <Group title="EMI / EMC Test Setup" />
                  <TableRow
                    no="8"
                    cat="EMI / EMC"
                    item={
                      <>
                        Anechoic Chamber (9 Types Tests)<br />
                        6 Nos EMI / EMC Workstations (11 Types Tests)<br />
                        High Voltage Tests as per MIL Standards
                      </>
                    }
                  />

                  <Group title="Mobile Ground Control Station" />
                  <TableRow no="9" cat="Dynamic" item="Mobile Ground Control Station (Mobile GCS)" />
                  <TableRow no="10" cat="Dynamic" item="Ground Control Station (GCS)" />

                  <Group title="Universal Testing Machine" />
                  <TableRow no="11" cat="Structural" item="Universal Testing Machine (UTM)" />

                  <Group title="Standard Testing & Measurement" />
                  <TableRow no="12" cat="Electrical" item="Clamp Meter" />
                  <TableRow no="13" cat="Electrical" item="Insulation Tester (Megger)" />
                  <TableRow no="14" cat="Electrical" item="Digital Earth Resistance Meter" />
                  <TableRow no="15" cat="Metrology" item="3D Optical Scanner" />
                  <TableRow no="16" cat="Signal Analysis" item="Spectrum Analyser" />
                  <TableRow no="17" cat="Signal Analysis" item="Digital Phosphor Oscilloscope" />
                  <TableRow no="18" cat="Metrology" item="Coordinate Measuring Machine (CMM)" />

                </tbody>
              </table>

            </div>
          </div>
        </div>
      </section>

      {/* ================= DETAILED SECTIONS ================= */}
      <div className="gov-container main-content">

        <CapabilitySection title="Environmental Testing Facilities">
          <CapabilityCard link="/capabilities/cath-chamber" img={cath} title="Climate Altitude Chamber" />
          <CapabilityCard link="/capabilities/humidity-chamber" img={humidity} title="Humidity Chamber" />
          <CapabilityCard link="/capabilities/temp-chamber" img={temp} title="Temperature Chamber" />
          <CapabilityCard link="/capabilities/rain-chamber" img={rain} title="Rain Drip Test Chamber" />
          <CapabilityCard link="/capabilities/thermal-shock" img={thermal} title="Thermal Shock Chamber" />
          <CapabilityCard link="/capabilities/salt-spray" img={salt} title="Salt Spray Test Equipment" />
        </CapabilitySection>

        <CapabilitySection title="Power Supply Variation Test Setup">
          <CapabilityCard link="/capabilities/power-variation" img={powervariation} title="Power Supply Equipment" />
        </CapabilitySection>

        <CapabilitySection title="EMI / EMC Test Setup">
          <CapabilityCard link="/capabilities/emi-emc" img={emi} title="EMI / EMC Test Facility" />
        </CapabilitySection>

        <CapabilitySection title="Mobile Ground Control Station">
          <CapabilityCard link="/capabilities/gcs" img={gcs} title="Ground Control Station (GCS)" />
        </CapabilitySection>

        <CapabilitySection title="Universal Testing Machine">
          <CapabilityCard link="/capabilities/utm" img={utm} title="Universal Testing Machine (UTM)" />
        </CapabilitySection>

        <CapabilitySection title="Standard Testing & Measurement">
          <CapabilityCard link="/capabilities/cmm" img={cmm} title="Coordinate Measuring Machine (CMM)" />
          <CapabilityCard link="/capabilities/optical-scanner" img={scanner} title="3D Optical Scanner" />
          <CapabilityCard link="/capabilities/misc" img={misc} title="Electrical & Support Instruments" />
          <CapabilityCard link="/capabilities/emi-instrumentation" img={mso} title="MSO & Spectrum Analyzer" />
        </CapabilitySection>

      </div>
    </div>
  );
};

/* ================= HELPERS ================= */

const Group = ({ title }) => (
  <tr className="table-sub-group">
    <td colSpan="3">{title}</td>
  </tr>
);

const TableRow = ({ no, cat, item }) => (
  <tr>
    <td>{no}</td>
    <td>{cat}</td>
    <td>{item}</td>
  </tr>
);

const CapabilitySection = ({ title, children }) => (
  <div className="gov-section-group">
    <h3 className="group-heading">{title}</h3>
    <div className="gov-grid-layout">{children}</div>
  </div>
);

const CapabilityCard = ({ link, img, title }) => (
  <Link to={link} className="modern-fac-card">
    <div className="img-container">
      <img src={img} alt={title} />
    </div>
    <div className="card-details">
      <h4>{title}</h4>
      <div className="card-footer">
        <span>Detailed Specs</span>
        <span className="arrow-icon">→</span>
      </div>
    </div>
  </Link>
);

export default Capabilities;
