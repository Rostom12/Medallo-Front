import React from "react";
import ReactDOM from "react-dom/client";

import "./Contact.css";

function Contact() {
  return (
    <div className="container mt-5">
      <h1 className="my-5">Vous souhaiter nous Contacter?</h1>
      <form>
        <div className="row mb-3">
          <div className="col-4">
            {" "}
            <label htmlFor="name" className="form-label">
              Votre nom
            </label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="col-4">
            <label htmlFor="email" className="form-label">
              Adresse e-mail
            </label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="col-4">
            <label htmlFor="phone" className="form-label">
              Télephone
            </label>
            <input type="text" className="form-control" id="phone" />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Votre message (Champs obligatoire)
          </label>
          <textarea className="form-control" id="message"></textarea>
        </div>

        <h6>Notre politique de confidentialité s'applique.</h6>

        <button type="submit" className="btn btn-secondary">
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default Contact;
