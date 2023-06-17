import React from "react";
import ReactDOM from "react-dom/client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./Pharmacies.css";

import { PharmacieModel } from "../models/Pharmacie";

type Props = {
  pharmacieData: Array<PharmacieModel>;
};

/*type Props = {
  pharmacieData: Array<{
    id: number;
    nature: string;
    name: string;
    position: string;
    status: string;
    content: object;
  }>;
};*/

export class Pharmacies extends React.Component<Props> {
  state = {
    allDisplayed: false,
    pharmacieData: this.props.pharmacieData,
  };

  onToggle = () => {
    if (this.state.allDisplayed) {
      this.setState({
        pharmacieData: this.props.pharmacieData,
        allDisplayed: false,
      });
    } else {
      this.setState({
        pharmacieData: this.props.pharmacieData.filter(
          (element) => element.Status === "ouverte, ferme à 21h"
        ),
        allDisplayed: true,
      });
    }
  };

  statusColor = (elem: string | undefined) => {
    return elem == "ouverte, ferme à 21h" ? "statusGreen" : "statusRed";
  };

  render() {
    return (
      <div className="container">
        <h1 className="my-5 pharTitle">Pharmacies</h1>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitch"
            onClick={this.onToggle}
          />
          <label className="form-check-label" htmlFor="flexSwitch">
            Ouvertes seulement
          </label>
        </div>
        {this.state.pharmacieData.map((element) => {
          return (
            <div key={element.Id} className="row pharItem ">
              <div className="col-6">
                <a href={"/pharmacies/" + element.Name}>
                  <h2>Pharmacie {element.Name}</h2>
                </a>
                <h6>
                  <span>
                    <FontAwesomeIcon
                      className="locationIcon"
                      icon={faLocationDot}
                    />
                  </span>
                  <span className="ms-2">
                    {" "}
                    A {element.Distance} km de chez vous
                  </span>
                </h6>
              </div>
              <div className={"col-6 " + this.statusColor(element.Status)}>
                <h2 className="pharStatus">{element.Status}</h2>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Pharmacies;
