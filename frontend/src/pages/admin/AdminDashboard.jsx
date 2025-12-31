import React from "react";
import { Link } from "react-router-dom";
import "../../styles/admin/AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard-page">
      {/* HEADER */}
      <section className="admin-dashboard-header">
        <h1>Admin Dashboard</h1>
        <p>UAS Testing Foundation – Internal Control Panel</p>
      </section>

      {/* DASHBOARD GRID */}
      <section className="admin-dashboard-content">
        <div className="admin-card-grid">

          <AdminCard
            title="Quotation Requests"
            desc="View and manage all quotation submissions"
            link="/admin/quotations"
            icon="📄"
          />

          <AdminCard
            title="Add Tender"
            desc="Publish new tenders with official documents"
            link="/admin/tenders/add"
            icon="📢"
          />

          {/* ✅ ADDED – MANAGE TENDERS */}
          <AdminCard
            title="Manage Tenders"
            desc="View or delete existing tenders"
            link="/admin/tenders"
            icon="🗂️"
          />

          <AdminCard
            title="Tender Enquiries"
            desc="View tender related enquiries"
            link="/admin/tender-enquiries"
            icon="📨"
          />

          <AdminCard
            title="Add Job"
            desc="Create new job openings"
            link="/admin/jobs/add"
            icon="➕"
          />

          <AdminCard
            title="Manage Jobs"
            desc="Open or close job postings"
            link="/admin/jobs"
            icon="⚙️"
          />

          <AdminCard
            title="Career Applications"
            desc="View resumes and job applications"
            link="/admin/careers"
            icon="👨‍💼"
          />

        </div>
      </section>
    </div>
  );
};

const AdminCard = ({ title, desc, link, icon }) => (
  <div className="admin-dashboard-card">
    <div className="admin-card-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{desc}</p>
    <Link to={link} className="admin-card-btn">
      Open
    </Link>
  </div>
);

export default AdminDashboard;
