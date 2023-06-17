import React, { Component } from "react";
import IMG from "../assets/user.jpg";
import "./Docteurs.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { DocteurModel } from "../models/Docteur";

type Props = {
  docteurData: DocteurModel;
};

/*type Props = {
  docteurData: {
    id: number;
    name: string;
    spec: string;
    position: string;
    specialite: string;
    cabinetAddress: string;
    cliniqueAddress: string;
    phone: string;
  };
};*/

export class Docteur extends React.Component<Props> {
  render() {
    return (
      <div className="container boxLayout">
        <img src={IMG} alt="doc image" width="300px" height="300px" />
        <h2>{this.props.docteurData.Name}</h2>
        <h3>{this.props.docteurData.specialitie}</h3>
        <h4>Cabinet: {this.props.docteurData.Address}</h4>
        <h4>Clinique : {this.props.docteurData.Address}</h4>
        <a href={"tel: " + this.props.docteurData.PhoneNumber}>
          <h6>
            <FontAwesomeIcon className="phoneIcon" icon={faPhone} />
            {this.props.docteurData.PhoneNumber}
          </h6>
        </a>
        <a
          href={
            "https://www.google.com/maps/?q=" + this.props.docteurData.Address
          }
          target="_blank"
        >
          <h6>
            <FontAwesomeIcon className="locationIcon" icon={faLocationDot} />
            {this.props.docteurData.Distance}
          </h6>
        </a>
      </div>
    );
  }
}

export default Docteur;
