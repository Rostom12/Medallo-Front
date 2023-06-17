import React from "react";
import ReactDOM from "react-dom/client";

import "./Home.css";
import phar from "../assets/phar.jpg";
import para from "../assets/para.jpg";
import doc from "../assets/doc.jpg";

function Home() {
  return (
    <div className="container-fluid mx-4">
      <h1 className="m-5">De quoi avez vous besoin?</h1>
      <div className="row my-4 px-4 justify-content-center">
        <div className="col-10 col-md-5 col-xl-4 mb-4">
          <a href="/pharmacies">
            <div className="card bgColor">
              <img
                src={phar}
                className="card-img-top"
                alt="..."
                width="50%"
                height="400px"
              />
              <div className="card-body">
                <h5 className="card-title">Pharmacies</h5>
                <p className="card-text">
                  Découvrez les pharmacies les plus proches de vous, les
                  horraies de travail, leur disponibilité, l'itinéraire adéquat
                  et utilisez notre plateforme pour les contacter.
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="col-10 col-md-5 col-xl-4 mb-4">
          <a href="/parapharmacies">
            <div className="card bgColor">
              <img
                src={para}
                className="card-img-top"
                alt="..."
                width="50%"
                height="400px"
              />
              <div className="card-body">
                <h5 className="card-title">Parapharmacies</h5>
                <p className="card-text">
                  Découvrez les pharmacies les plus proches de vous, les
                  horraies de travail, leur disponibilité, l'itinéraire adéquat
                  et utilisez notre plateforme pour les contacter.
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="col-10 col-md-5">
          <a href="/specialites">
            <div className="card bgColor">
              <img
                src={doc}
                className="card-img-top"
                alt="..."
                width="50%"
                height="400px"
              />
              <div className="card-body">
                <h5 className="card-title">Médecin</h5>
                <p className="card-text">
                  Découvrez les pharmacies les plus proches de vous, les
                  horraies de travail, leur disponibilité, l'itinéraire adéquat
                  et utilisez notre plateforme pour les contacter.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
