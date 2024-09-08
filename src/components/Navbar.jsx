import React from "react";
import logo from "../assets/navbar-icon.svg";
import website from "../assets/website-icon.svg";

const Navbar = () => {
  return (
    <nav>
        <div className="navbar">

      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" />
        <span>Black In Dashboard</span>
      </div>
      <button className="navbar-button">
        <img src={website} alt="website-icon" /> Go To Website
      </button>
        </div>
    </nav>
  );
};

export default Navbar;
