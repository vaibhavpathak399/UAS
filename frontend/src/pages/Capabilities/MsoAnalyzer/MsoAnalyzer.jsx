import React, { useEffect } from "react";
import "../../../styles/Capabilities/MsoAnalyzer/MsoAnalyzer.css";

/* IMAGES */
import msoImg from "../../../assets/capabilities/MsoAnalyzer/Mso.png";
import spectrumImg from "../../../assets/capabilities/MsoAnalyzer/Spectrum.png";

const MsoAnalyzer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mso-instrument-page">
      {/* --- COMPACT HERO --- */}
      <section className="mso-header-simple">
        <div className="container">
          <span className="inst-label">EMI / EMC Instrumentation</span>
          <h1>MSO & Spectrum Analyzer</h1>
          <p>Precision signal analysis tools for debugging and compliance verification.</p>
        </div>
      </section>

      {/* --- SPECTRUM ANALYZER SECTION --- */}
      <section className="inst-section">
        <div className="container inst-flex">
          <div className="inst-media">
            <div className="inst-img-wrapper">
              <img src={spectrumImg} alt="Spectrum Analyzer" />
            </div>
          </div>
          <div className="inst-info">
            <h2 className="inst-title">Spectrum Analyzer</h2>
            <div className="inst-meta">
              <div className="meta-tag"><span>Model</span> MS2080A</div>
              <div className="meta-tag"><span>Make</span> Anritsu</div>
              <div className="meta-tag"><span>S/N</span> 2515033</div>
            </div>
            <p className="inst-desc">
              Optimized for measurement of insertion loss, antenna tuning, cable maintenance, 
              and RF characterization in demanding EMI/EMC environments.
            </p>
            <div className="inst-specs">
              <div className="spec-pill"><strong>Freq Range:</strong> 9 kHz to 6 GHz</div>
              <div className="spec-pill"><strong>Bandwidth:</strong> 20 MHz or better</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MSO SECTION (ALTERNATE) --- */}
      <section className="inst-section bg-soft">
        <div className="container inst-flex reverse">
          <div className="inst-media">
            <div className="inst-img-wrapper">
              <img src={msoImg} alt="Mixed Signal Oscilloscope" />
            </div>
          </div>
          <div className="inst-info">
            <h2 className="inst-title">Mixed Signal Oscilloscope (MSO)</h2>
            <div className="inst-meta">
              <div className="meta-tag"><span>Model</span> MSO 64B</div>
              <div className="meta-tag"><span>Make</span> Tektronix</div>
              <div className="meta-tag"><span>S/N</span> B031071</div>
            </div>
            <p className="inst-desc">
              High-performance debugging and waveform analysis tool for 
              electronic component characterization in complex signal environments.
            </p>
            <div className="inst-specs">
              <div className="spec-pill"><strong>Input Channels:</strong> 4</div>
              <div className="spec-pill"><strong>Bandwidth:</strong> 4 GHz (All Channels)</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MsoAnalyzer;