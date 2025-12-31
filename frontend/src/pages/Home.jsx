import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

/* ================= ASSETS ================= */
import heroVideo from "../assets/videos/upvid.mp4";
import dtisImage from "../assets/images/dtis-mou.jpg";

/* ================= INVESTORS ================= */
import hal from "../assets/investors/hal.png";
import bel from "../assets/investors/bel.png";
import beml from "../assets/investors/beml.png";
import gil from "../assets/investors/gil.png";
import yil from "../assets/investors/yil.png";
import endure from "../assets/investors/endure.png";

const Home = () => {
  return (
    <div className="home">
      {/* ================= HERO SECTION WITH VIDEO ================= */}
      <section className="hero video-hero">
        <video
          className="hero-video"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1>UAS Testing Foundation</h1>


          <div className="hero-buttons">
            <Link to="/capabilities" className="btn primary">
              Testing Capabilities
            </Link>

            <Link to="/quotation" className="btn secondary">
              Request Quotation
            </Link>
          </div>
        </div>
      </section>

      {/* ================= HERO FEATURE BOXES ================= */}
      <section className="hero-features">
        <div className="feature-box">
          <h3>Reliability & Safety Analysis</h3>
          <p>
            Comprehensive evaluation of UAS systems to ensure operational
            reliability and safety compliance.
          </p>
        </div>

        <div className="feature-box">
          <h3>Environmental Testing</h3>
          <p>
            Advanced environmental testing facilities to validate components
            performance as per aerospace and MIL standard.
          </p>
        </div>

        <div className="feature-box">
          <h3>EMI / EMC Compliance</h3>
          <p>
            Comprehensive EMI/EMC testing Facility as per aerospace and MIL standard.
            
          </p>
        </div>

        <div className="feature-box">
          <h3>Dynamic Testing</h3>
          <p>
            End-to-end flight testing, datalink validation and performance
            assessment for UAS platforms.
          </p>
        </div>
      </section>

      {/* ================= ABOUT UAS================= */}
      <section className="about-v2">
        <div className="about-v2-container">
          {/* LEFT */}
          <div className="about-v2-left">
            <span className="about-kicker">WHO WE ARE</span>

            <p className="about-lead">
              UAS Testing Foundation is a Section-8 company established
              under the Companies Act, 2013 to create a world-class testing
              ecosystem for Unmanned Aerial Systems (UAS), UAVs and Drones
              in India.



              
            </p>

                        <p>
              Established under the{" "}
              <strong>Defence Testing Infrastructure Scheme (DTIS)</strong>{" "}
              launched by the Ministry of Defence, Government of India, UAS Testing Foundation will provide easy access and meeting the testing needs of the domestic defence industry.
              {" "}
              
            </p>




            <p>
              The major shareholders are Defence Public Sector units like{" "}
              <strong>Hindustan Aeronautics Limited (HAL)</strong>,
              <strong>Bharat Electronics Limited (BEL)</strong>,{" "}
              <strong>BEML Limited</strong>,{" "}
              <strong>Gliders India Limited (GIL)</strong>,{" "}
              <strong>Yantra India Limited (YIL)</strong> and{" "}
              <strong>Endure Air Systems Pvt. Ltd.</strong><br />
              <strong>Technopark@iitk and Uttar Pradesh Expressways Industrial Development Authority (UPEIDA) are also the important partners of UAS testing Foundation.</strong>
            </p>



            <Link to="/about" className="btn primary">
              Read More 
            </Link>
          </div>

          {/* RIGHT */}
          <div className="about-v2-right">
            <div className="about-card">
              <h4>Our Vision</h4>
              <p>
              To be the nation’s premier hub for UAS testing, strengthening India’s 
              defence manufacturing ecosystem and accelerating innovation by 
              providing cutting-edge infrastructure to industry leaders, MSMEs and startups.
              </p>
            </div>

            <div className="about-card">
              <h4>One-Stop Testing Solution</h4>
              <p>
                Comprehensive testing facilities for UAS, UAVs and Drones
                covering performance, safety, compliance and certification
                requirements.
              </p>
            </div>

            <div className="about-card">
              <h4>Enabling Startup Growth</h4>
              <p>
                Affordable and accessible infrastructure to accelerate
                innovation, indigenisation and defence manufacturing growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DTIS SECTION ================= */}
      <section className="dtis-section">
        <div className="dtis-container">
          <div className="dtis-image">
            <img src={dtisImage} alt="MoD DTIS MoU Signing" />
            <span className="dtis-caption">
              Agreement Signing Ceremony with officials of MOD,UPEIDA and HAL.
            </span>
          </div>

          <div className="dtis-content">

            <h2>
             Key Milestone
            </h2>



            <ul className="dtis-points">
              <li>
                <strong>21 Jun 2024 – Incorporation of UAS Testing Foundation.</strong>
              </li>
              <li>
                <strong>25 Jul 2024 – Contract signed with UPEIDA.</strong>
                
              </li>
              <li>
                <strong>Mar 2026 – Facility to become operational.</strong>
              </li>
              
              
            </ul>
          </div>
        </div>
      </section>



      {/* ================= INVESTORS ================= */}
      <section className="investors-home">
        <div className="investors-container">
          <h3 className="investors-title">
            Strategic Investors
          </h3>

          <div className="investors-logos">
            <img src={hal} alt="HAL" />
            <img src={bel} alt="BEL" />
            <img src={beml} alt="BEML" />
            <img src={gil} alt="GIL" />
            <img src={yil} alt="YIL" />
            <img src={endure} alt="Endure Air Systems" />
          </div>
        </div>
      </section>


      {/* ================= CAPABILITIES ================= */}
<section className="capabilities-home">
  <div className="cap-container">
          <h3 className="investors-title">
            Testing Capabilities
          </h3>

    <div className="cap-grid">
      {/* Har box ab ek Link hai, content wahi hai */}
      <Link to="/capabilities" className="cap-box">
        <div className="cap-icon">🧪</div>
        <h4>Environmental Testing</h4>
      </Link>

      <Link to="/capabilities" className="cap-box">
        <div className="cap-icon">🌡️</div>
        <h4>Power Supply Variation Test Setup</h4>
      </Link>

      <Link to="/capabilities" className="cap-box">
        <div className="cap-icon">📡</div>
        <h4>EMI / EMC Test Setup</h4>
      </Link>

      <Link to="/capabilities" className="cap-box">
        <div className="cap-icon">📐</div>
        <h4>Mobile Ground Control Station</h4>
      </Link>

      <Link to="/capabilities" className="cap-box">
        <div className="cap-icon">📶</div>
        <h4>Universal Testing Machine</h4>
      </Link>

      <Link to="/capabilities" className="cap-box">
        <div className="cap-icon">🛰️</div>
        <h4>Standard Testing and Measurement</h4>
      </Link>
    </div>

    <div className="cap-cta">
      <Link to="/capabilities" className="btn primary">
        View All Capabilities
      </Link>
    </div>
  </div>
</section>

      {/* ================= WHY UASTF ================= */}
     
      {/* ================= FINAL CTA ================= 
      <section className="final-cta-advanced">
        <div className="cta-inner">


          <div className="cta-action-grid">
            <div className="cta-action">


              <Link to="/quotation" className="btn primary">
                Request Quotation
              </Link>
            </div>

            <div className="cta-action">


              <Link to="/contact" className="btn secondary">
                Contact UAS
              </Link>
            </div>

            <div className="cta-action">

              <Link to="/careers" className="btn outline">
                Explore Careers
              </Link>
            </div>
          </div>
        </div>
      </section>*/}
    </div>
  );
};

export default Home;
