import React from "react";
import ReactDOM from "react-dom/client";

import "./Footer.css";

function Footer() {
  return (
    <footer className="container-fluid footerBox">
      <a className="footerLink" href="#">
        <h6>Conditions générales d'utilisation</h6>
      </a>
      <a className="footerLink" href="#">
        <h6>Politique de confidentialité</h6>
      </a>
      <h6>contact@qalamsoftware.com</h6>
      <h6>Tel: +212662025243</h6>
    </footer>
  );
}

export default Footer;
