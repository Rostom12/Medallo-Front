import React from "react";
import ReactDOM from "react-dom/client";

import "./Navbar.css";
import logo from "../assets/logo.png";

let item = {
  acceuil: "active",
  services: "",
  pharmacies: "",
  parapharmacies: "",
  docteurs: "",
  contact: "",
};

function activeLink() {
  switch (window.location.pathname) {
    case "/acceuil":
      item = {
        acceuil: "active",
        services: "",
        pharmacies: "",
        parapharmacies: "",
        docteurs: "",
        contact: "",
      };
      break;
    case "/services":
      item = {
        acceuil: "",
        services: "active",
        pharmacies: "",
        parapharmacies: "",
        docteurs: "",
        contact: "",
      };
      break;
    case "/pharmacies":
      item = {
        acceuil: "",
        services: "",
        pharmacies: "active",
        parapharmacies: "",
        docteurs: "",
        contact: "",
      };
      break;
    case "/parapharmacies":
      item = {
        acceuil: "",
        services: "",
        pharmacies: "",
        parapharmacies: "active",
        docteurs: "",
        contact: "",
      };
      break;
    case "/specialites":
      item = {
        acceuil: "",
        services: "",
        pharmacies: "",
        parapharmacies: "",
        docteurs: "active",
        contact: "",
      };
      break;
    case "/contact":
      item = {
        acceuil: "",
        services: "",
        pharmacies: "",
        parapharmacies: "",
        docteurs: "",
        contact: "active",
      };
      break;
  }
}

function Navbar() {
  activeLink();
  return (
    <nav className="navbar navbar-expand-lg bg-color">
      <div className="container-fluid m-3">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="logo image" width="150px"></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className={"nav-item " + item.acceuil}>
              <a className="nav-link active" aria-current="page" href="/">
                Acceuil
              </a>
            </li>
            <li className={"nav-item " + item.services}>
              <a
                className="nav-link active"
                aria-current="page"
                href="/services"
              >
                Services
              </a>
            </li>
            <li className={"nav-item " + item.pharmacies}>
              <a
                className="nav-link active"
                aria-current="page"
                href="/pharmacies"
              >
                Pharmacies
              </a>
            </li>
            <li className={"nav-item " + item.parapharmacies}>
              <a
                className="nav-link active"
                aria-current="page"
                href="/parapharmacies"
              >
                Parapharmacies
              </a>
            </li>
            <li className={"nav-item " + item.docteurs}>
              <a
                className="nav-link active"
                aria-current="page"
                href="/specialites"
              >
                Docteurs
              </a>
            </li>
            <li className={"nav-item " + item.contact}>
              <a
                className="nav-link active"
                aria-current="page"
                href="/contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
