import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import BrandHeader from "./components/BrandHeader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* ================= PUBLIC PAGES ================= */
import Home from "./pages/Home";
import About from "./pages/About";
import Capabilities from "./pages/Capabilities/Capabilities";
import Careers from "./pages/Careers";
import JobDetail from "./pages/JobDetail";
import Tenders from "./pages/Tenders";
import Investors from "./pages/Investors";
import Contact from "./pages/Contact";
import Quotation from "./pages/Quotation";
import ApplyJob from "./pages/ApplyJob";
import TenderEnquiry from "./pages/TenderEnquiry";

/* ================= CAPABILITIES ================= */
import CathChamber from "./pages/Capabilities/Environmental/CathChamber";
import ThermalShock from "./pages/Capabilities/Environmental/ThermalShock";
import RainChamber from "./pages/Capabilities/Environmental/RainChamber";
import HumidityChamber from "./pages/Capabilities/Environmental/HumidityChamber";
import SaltSpray from "./pages/Capabilities/Environmental/SaltSpray";
import TempChamber from "./pages/Capabilities/Environmental/TempChamber";
import PowerVariation from "./pages/Capabilities/Electrical/PowerVariation";
import EmiTesting from "./pages/Capabilities/EmiEmc/EmiTesting";
import Gcs from "./pages/Capabilities/Dynamic/Gcs";
import Cmm from "./pages/Capabilities/Measurement/Cmm";
import Utm from "./pages/Capabilities/Measurement/Utm";
import OpticalScanner from "./pages/Capabilities/Measurement/OpticalScanner";
import Misc from "./pages/Capabilities/Misc/Misc";
import MsoAnalyzer from "./pages/Capabilities/MsoAnalyzer/MsoAnalyzer";

/* ================= ADMIN ================= */
import AdminLogin from "./pages/admin/AdminLogin";
import ProtectedRoute from "./pages/admin/ProtectedRoute";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminQuotations from "./pages/admin/Quotations";
import AdminCareers from "./pages/admin/Careers";
import AddTender from "./pages/admin/AddTender";
import TenderEnquiries from "./pages/admin/TenderEnquiries";
import AddJob from "./pages/admin/AddJob";
import ManageJobs from "./pages/admin/ManageJobs";
import ManageTenders from "./pages/admin/ManageTenders"; // ✅ ADDED ONLY THIS

/* ================= LAYOUT HANDLER ================= */
const Layout = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      <ScrollToTop />

      {/* 🔐 Hide public header/navbar on admin */}
      {!isAdminRoute && <BrandHeader />}
      {!isAdminRoute && <Navbar />}

      <Routes>
        {/* ===== PUBLIC ===== */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/capabilities" element={<Capabilities />} />

        {/* ===== CAREERS ===== */}
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/:id" element={<JobDetail />} />
        <Route path="/apply" element={<ApplyJob />} />

        {/* ===== CAPABILITIES ===== */}
        <Route path="/capabilities/cath-chamber" element={<CathChamber />} />
        <Route path="/capabilities/thermal-shock" element={<ThermalShock />} />
        <Route path="/capabilities/rain-chamber" element={<RainChamber />} />
        <Route path="/capabilities/humidity-chamber" element={<HumidityChamber />} />
        <Route path="/capabilities/salt-spray" element={<SaltSpray />} />
        <Route path="/capabilities/temp-chamber" element={<TempChamber />} />
        <Route path="/capabilities/power-variation" element={<PowerVariation />} />
        <Route path="/capabilities/emi-emc" element={<EmiTesting />} />
        <Route path="/capabilities/emi-instrumentation" element={<MsoAnalyzer />} />
        <Route path="/capabilities/gcs" element={<Gcs />} />
        <Route path="/capabilities/cmm" element={<Cmm />} />
        <Route path="/capabilities/utm" element={<Utm />} />
        <Route path="/capabilities/optical-scanner" element={<OpticalScanner />} />
        <Route path="/capabilities/misc" element={<Misc />} />

        {/* ===== OTHER PUBLIC ===== */}
        <Route path="/tenders" element={<Tenders />} />
        <Route path="/tenders/enquiry/:id" element={<TenderEnquiry />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quotation" element={<Quotation />} />

        {/* ===== ADMIN ===== */}
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/quotations"
          element={
            <ProtectedRoute>
              <AdminQuotations />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/careers"
          element={
            <ProtectedRoute>
              <AdminCareers />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/tenders/add"
          element={
            <ProtectedRoute>
              <AddTender />
            </ProtectedRoute>
          }
        />

        {/* ✅ MANAGE TENDERS */}
        <Route
          path="/admin/tenders"
          element={
            <ProtectedRoute>
              <ManageTenders />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/tender-enquiries"
          element={
            <ProtectedRoute>
              <TenderEnquiries />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/jobs/add"
          element={
            <ProtectedRoute>
              <AddJob />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/jobs"
          element={
            <ProtectedRoute>
              <ManageJobs />
            </ProtectedRoute>
          }
        />
      </Routes>

      {/* 🔐 Hide footer on admin */}
      {!isAdminRoute && <Footer />}
    </>
  );
};

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
