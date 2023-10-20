import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer bg-dark">
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Matmari Shashank. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
