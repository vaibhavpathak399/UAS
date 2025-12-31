import React from "react";
import "../styles/brandHeader.css";
import logo from "../assets/images/uastf-logo.png";

const BrandHeader = () => {
  return (
    <div className="brand-header">
      {/* LEFT BIG LOGO */}
      <div className="brand-logo">
        <img src={logo} alt="UASTF Logo" />
      </div>

      {/* CENTER TEXT */}
      <div className="brand-center">
        <h1>UAS Testing Foundation</h1>
        <p>(Incorporated under Section-8 of the Companies Act, 2013)</p>
      </div>

      {/* RIGHT BIG LOGO */}
      <div className="brand-logo">
        <img src={logo} alt="UASTF Logo" />
      </div>
    </div>
  );
};

export default BrandHeader;
