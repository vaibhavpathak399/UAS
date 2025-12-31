import React, { useEffect } from "react";
import "../styles/investors.css";

/* NEWS IMAGES */
import incorporation from "../assets/news/incorporation.jpg";
import mouSigning from "../assets/news/mou-signing.jpg";

/* GALLERY IMAGES */
import gallery1 from "../assets/gallery/gallery1.jpg";
import gallery2 from "../assets/gallery/gallery2.jpg";

const Investors = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="news-gallery-page">

      {/* ================= PAGE HEADER ================= */}
      <section className="news-hero">
        <div className="container">
          <h1>Gallery</h1>
        </div>
      </section>

      {/* ================= NEWS SECTION ================= */}
      <section className="news-section">
        <div className="container">

          <h2 className="section-title">Latest Official News</h2>

          <div className="news-grid">

            {/* NEWS 1 */}
            <div className="news-card">
              <div className="news-image">
                <img src={incorporation} alt="UAS Testing Foundation Incorporation News" />
              </div>
              <div className="news-content">
                <span className="news-tag">Official Announcement</span>
                <h3>
                  UAS Testing Foundation Incorporated under DTIS Scheme
                </h3>
                <p>
                  UAS Testing Foundation, a Section-8 company, has been incorporated
                  to establish Defence Testing Infrastructure for Unmanned Aerial
                  Systems (UAS) under the Defence Testing Infrastructure Scheme (DTIS)
                  of the Ministry of Defence, Government of India.
                </p>
                <p>
                  The initiative aims to strengthen indigenous defence manufacturing
                  by providing accessible, state-of-the-art testing facilities to
                  MSMEs, startups and defence industries.
                </p>
              </div>
            </div>

            {/* NEWS 2 */}
            <div className="news-card">
              <div className="news-image">
                <img src={mouSigning} alt="MoU Signing with UPEIDA" />
              </div>
              <div className="news-content">
                <span className="news-tag">MoU Signing</span>
                <h3>
                  MoU Signed between UPEIDA & UAS Testing Foundation
                </h3>
                <p>
                  Uttar Pradesh Expressways Industrial Development Authority (UPEIDA)
                  signed a Memorandum of Understanding (MoU) for the development,
                  operation and monitoring of Defence Testing Infrastructure for UAS
                  under DTIS.
                </p>
                <p>
                  The collaboration will support testing, certification and
                  validation of unmanned aerial systems, contributing to national
                  security and defence manufacturing growth.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= GALLERY SECTION ================= */}
      <section className="gallery-section">
        <div className="container">
          <h2 className="section-title">Photo Gallery</h2>

          <div className="gallery-grid">
            <div className="gallery-card">
              <img src={gallery1} alt="MoU signing ceremony at UPEIDA" />
              <p>
                MoU signing ceremony between UPEIDA and UAS Testing Foundation
                for setting up Defence Testing Infrastructure for UAS.
              </p>
            </div>

            <div className="gallery-card">
              <img src={gallery2} alt="Official meeting and document exchange" />
              <p>
                Official meeting and exchange of documents involving senior
                officials during the DTIS implementation process.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Investors;
