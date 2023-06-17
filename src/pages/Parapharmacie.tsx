import React from "react";
import ReactDOM from "react-dom/client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./Pharmacie.css";

import { ParapharmacieModel } from "../models/Parapharmacie";

type Props = {
  parapharmacieData: ParapharmacieModel;
};

/*type Props = {
  parapharmacieData: {
    id: number;
    nature: string;
    name: string;
    position: string;
    status: string;
    content: {
      doctorName: string;
      phoneNumber: string;
      address: string;
    };
  };
};*/

export class Pharmacie extends React.Component<Props> {
  render() {
    return (
      <div className="container page">
        <h1 className="text-center my-5">
          Paraharmacie {this.props.parapharmacieData.Name}
        </h1>
        <div className="row mb-5 justify-content-center">
          <div className="col-lg-5 col-sm-6">
            <h2 className="text-center">{this.props.parapharmacieData.Name}</h2>
            <h2 className="text-center">
              {this.props.parapharmacieData.Address}
            </h2>
          </div>
          <div className="col-lg-5 col-sm-6">
            <a href={"tel: " + this.props.parapharmacieData.PhoneNumber}>
              <h6 className="text-center">
                <FontAwesomeIcon className="phoneIcon" icon={faPhone} />
                {this.props.parapharmacieData.PhoneNumber}
              </h6>
            </a>
            <a
              href={
                "https://www.google.com/maps/?q=" +
                this.props.parapharmacieData.Address
              }
              target="_blank"
            >
              <h6 className="text-center">
                <FontAwesomeIcon
                  className="locationIcon"
                  icon={faLocationDot}
                />
                {this.props.parapharmacieData.Distance}
              </h6>
            </a>
          </div>
        </div>

        <h1 className="text-center py-5">
          <span className="pharContentStatus">
            {this.props.parapharmacieData.Status}
          </span>
        </h1>
      </div>
    );
  }
}

export default Pharmacie;
