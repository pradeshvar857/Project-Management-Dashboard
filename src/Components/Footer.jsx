import React from "react";
import "./Footer.css"; // Import CSS for styling

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Project Management Dashboard. All rights reserved.</p>
      <ul className="footer-links">
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms of Service</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </footer>
  );
}
