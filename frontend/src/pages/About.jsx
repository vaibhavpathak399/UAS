import React from "react";
import "../styles/about.css";

/* LEADERSHIP IMAGES */
import arvind from "../assets/leadership/arvind.jpg";
import tribhuwan from "../assets/leadership/tribhuwan.jpg";
import sundaresan from "../assets/leadership/sundaresan.jpg";
import babulal from "../assets/leadership/babulal.jpg";
import ramanujam from "../assets/leadership/ramanujam.jpg";
import abhishek from "../assets/leadership/abhishek.jpg";
import pratap from "../assets/leadership/pratap.jpg";
import amarendra from "../assets/leadership/amarendra.jpg";
import mayak from "../assets/leadership/Mayak.jpg";

const leaders = [
  { img: arvind, name: "Shri Arvind M Tumane", role: "Chairman & Director" },
  { img: tribhuwan, name: "Shri Tribhuwan Narayana Singh", role: "Director" },
  { img: sundaresan, name: "Shri Sundaresan S", role: "Director" },
  { img: babulal, name: "Shri Babu Lal Meena", role: "Director" },
  { img: ramanujam, name: "Shri S N Ramanujam", role: "Director" },
  { img: abhishek, name: "Prof. Abhishek", role: "Director" },
  { img: pratap, name: "Shri Srihari Pratap Shahi, IAS (ACEO)", role: "Director" },
  { img: amarendra, name: "Prof. Amarendra Kumar Singh", role: "Director" },
  { img: mayak, name: "Shri Mayak Pandey", role: "Director" },
];

const About = () => {
  return (
    <div className="about-page">
      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="container">
          <h1>About US</h1>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
<section className="about-section overview-simple">
  <div className="container">
    <div className="simple-content-wrapper">
      
      {/* Intro Para */}
      <p className="intro-text">
        <strong>UAS Testing Foundation</strong>- a Section 8 company incorporated on 21st June 2024 with aim of creating Defense Testing Infrastructure under aegis of Defence Testing Infrastructure Scheme (DTIS) launched by Government of India (GOI).
      </p>

      {/* Points List */}
      <ul className="simple-points-list">
        <li>DTIS aims to provide a focused, structured and significant thrust to indigenous defence manufacturing by providing state of the art testing facilities available to the defence development and production industry in the country.</li>
        
        <li>The testing infrastructure available UAS testing Foundation will provide easy access and thus meet the testing needs of the domestic defence industry.</li>
        
        <li>The major shareholders include Defence Public Sector units like <strong>HAL, BEL, BEML, Yantra India Limited (YIL), Gliders India Limited (GIL), and Endure Air Systems</strong>. Technopark@iitk and UPEIDA are also important partners.</li>
        
        <li>Located at Technopark Building, IIT-Kanpur, the facility covers complete UAS testing requirements with both <strong>Static and Dynamic test facilities</strong>.</li>
        
        <li><strong>Static Facility:</strong> Environmental Test Chambers, EMI EMC Test Setup, Power Supply Variation, and Ground Control Station.</li>
        
        <li><strong>Dynamic Facility:</strong> Mobile Ground Control Station for Datalink/Navigation, Aerial Flight Test, and Standard Measurement/Destructive Testing.</li>
        
        <li>The goal is to provide a <strong>one-stop solution to MSMEs and Startups</strong> for testing systems and components at affordable rates.</li>
        
        <li>This facility strengthens India’s Defence manufacturing and propels the growth of MSMEs and Startups in Uttar Pradesh.</li>
      </ul>

    </div>
  </div>
</section>


      {/* MILESTONES (Compact) */}
      <section className="about-section timeline-bg">
        <div className="container">
          <h2 className="title-center">Key Milestones</h2>
          <div className="compact-timeline">
            <div className="t-item"><b>Jun 2024</b><p>Incorporated</p></div>
            <div className="t-item"><b>Jul 2024</b><p>MoU Signed</p></div>
            <div className="t-item active"><b>Mar 2026</b><p>IIT Kanpur Facility</p></div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP (Improved Design) */}
      <section className="about-section leadership">
        <div className="container">
          <h2 className="title-center">Board of Directors</h2>
          <div className="leader-flex-grid">
            {leaders.map((leader, i) => (
              <div className="pro-leader-card" key={i}>
                <div className="leader-img-wrapper">
                  <img src={leader.img} alt={leader.name} />
                </div>
                <div className="leader-details">
                  <h4>{leader.name}</h4>
                  <span>{leader.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;