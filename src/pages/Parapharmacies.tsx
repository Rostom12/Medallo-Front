import React from "react";
import ReactDOM from "react-dom/client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./Pharmacies.css";
import { ParapharmacieModel } from "../models/Parapharmacie";

type Props = {
  parapharmacieData: Array<ParapharmacieModel>;
};

/*type Props = {
  parapharmacieData: Array<{
    id: number;
    nature: string;
    name: string;
    position: string;
    status: string;
    content: object;
  }>;
};*/

export class Parapharmacies extends React.Component<Props> {
  state = {
    allDisplayed: false,
    parapharmacieData: this.props.parapharmacieData,
  };

  onToggle = () => {
    if (this.state.allDisplayed) {
      this.setState({
        parapharmacieData: this.props.parapharmacieData,
        allDisplayed: false,
      });
    } else {
      this.setState({
        parapharmacieData: this.props.parapharmacieData.filter(
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
        <h1 className="my-5 pharTitle">Parapharmacies</h1>
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
        {this.state.parapharmacieData.map((element) => {
          return (
            <div key={element.Id} className="row pharItem ">
              <div className="col-6">
                <a href={"/parapharmacies/" + element.Name}>
                  <h2>Paraharmacie {element.Name}</h2>
                </a>
                <h6>
                  <span>
                    <FontAwesomeIcon
                      className="locationIcon"
                      icon={faLocationDot}
                    />
                  </span>
                  <span className="ms-2">{element.Distance}</span>
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

export default Parapharmacies;
