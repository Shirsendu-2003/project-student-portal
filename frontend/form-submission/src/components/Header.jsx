import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      {/* Left: MCET Logo */}
      <div className="logo-container">
        <img
          src="https://www.mcetbhb.net/images/logo.svg"
          alt="MCET Logo"
          className="logo"
        />
      </div>

      {/* Center: College Info */}
      <div className="college-info">
        <h1>Murshidabad College of Engineering & Technology</h1>
        <h3>A Center of Technological & Professional Excellence. ESTD : 1998</h3>
        <p>
          Approved by AICTE | Affiliated to MAKAUT (WBUT) | Aided by Government
          of W. B. | Supported by Murshidabad Zilla Parishad (MZP)
        </p>
      </div>

      {/* Right: AICTE and MAKAUT Logos */}
      <div className="org-logos">
        <img
          src="https://www.mcetbhb.net/images/organization-logo/aicte.png"
          alt="AICTE Logo"
          className="org-logo"
        />
        <img
          src="https://www.mcetbhb.net/images/organization-logo/makaut.png"
          alt="MAKAUT Logo"
          className="org-logo"
        />
      </div>
    </header>
  );
}
