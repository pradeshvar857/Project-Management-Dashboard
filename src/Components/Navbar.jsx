import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import CSS for styling

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Project Dashboard</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/teams">Teams</Link></li>
        <li><Link to="/reports">Reports</Link></li>
      </ul>
      <button className="login-btn">Login</button>
    </nav>
  );
}
