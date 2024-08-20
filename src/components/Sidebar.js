import React from "react";
import { Link } from "react-router-dom";
let value = "Dashboard"
const Sidebar = () => {
  return (
    <div>
        
      <div className="side-bar">
        <Link className="side-option" to="/dashboard">
          {value}
        </Link>
        <Link className="side-option" to="/personal">
          Personal Information
        </Link>
        <Link className="side-option" to="/option">
          Option / Performance
        </Link>
        <Link className="side-option" to="/print1">
          Print
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
