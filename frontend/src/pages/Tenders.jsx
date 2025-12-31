import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/tenders.css";

const Tenders = () => {
  const [tenders, setTenders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch("http://localhost:5000/api/tenders")
      .then((res) => res.json())
      .then((data) => {
        setTenders(Array.isArray(data) ? data : []);
      })
      .catch(() => setTenders([]));
  }, []);

  const today = new Date();

  return (
    <div className="tender-premium-page">
      {/* ================= HERO ================= */}
      <section className="tender-hero">
        <div className="container">
          <h1>Tenders </h1>
         
        </div>
      </section>

      {/* ================= TENDER TABLE ================= */}
      <section className="tender-list-section">
        <div className="container">
          <div className="table-responsive">
            <table className="tender-table">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Tender Title & Reference</th>
                  <th>Closing Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {tenders.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="empty-row">
                      No Active Tenders Available Currently.
                    </td>
                  </tr>
                ) : (
                  tenders.map((tender, index) => {
                    const closingDate = new Date(tender.last_date);
                    const isOpen = closingDate >= today;

                    return (
                      <tr key={tender.id}>
                        <td className="text-center">{index + 1}</td>
                        <td>
                          <div className="tender-title-cell">
                            <strong>{tender.title}</strong>
                            <small>Ref: TNDR-{tender.id}</small>
                          </div>
                        </td>
                        <td>{closingDate.toLocaleDateString("en-GB")}</td>
                        <td>
                          <span className={`status-pill ${isOpen ? "open" : "closed"}`}>
                            {isOpen ? "OPEN" : "CLOSED"}
                          </span>
                        </td>
                        <td>
                          <div className="table-actions">
                            {isOpen ? (
                              <>
                                <a
                                  href={`http://localhost:5000/${tender.document_path}`}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="action-btn download"
                                  title="Download"
                                >
                                  📄 DOC
                                </a>
                                <button
                                  className="action-btn query"
                                  onClick={() => navigate(`/tenders/enquiry/${tender.id}`)}
                                >
                                  Enquire
                                </button>
                              </>
                            ) : (
                              <span className="closed-text">N/A</span>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================= NOTE ================= */}
      <section className="tender-note-section">
        <div className="container">
          <div className="note-box">
             <h4>Important Information</h4>
             <ul>
               <li>Submissions after the closing date will not be accepted.</li>
               <li>Check this page regularly for corrections or addendums.</li>
               <li>Detailed instructions are provided in the tender document.</li>
             </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tenders;