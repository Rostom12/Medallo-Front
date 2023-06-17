import React, { Component } from "react";
import IMG from "../assets/user.jpg";
import "./Docteur.css";

import { DocteurModel } from "../models/Docteur";

type Props = {
  Docteurspecialities: string;
  docteurData: Array<DocteurModel>;
};

/*type Props = {
  docteurData: Array<{
    id: number;
    name: string;
    spec: string;
    position: string;
    specialite: string;
    cabinetAddress: string;
    cliniqueAddress: string;
    phone: string;
  }>;
};*/

export class Docteurs extends React.Component<Props> {
  render() {
    return (
      <div className="container docTitle">
        <h1 className="m-5">{this.props.Docteurspecialities}</h1>
        {this.props.docteurData.map((element) => {
          return (
            <div className="row docteursItem">
              <div className="col-8 mt-5">
                <a href={"/docteurs/" + element.Id}>
                  <h2>Dr {element.name}</h2>
                </a>
                <h3>Dr {element.specialitie}</h3>
                <h4>{element.Distance}</h4>
              </div>
              <div className="col-4">
                <a href={"/docteurs/" + element.Id}>
                  <img
                    src={IMG}
                    width="200px"
                    height="200px"
                    alt="doctor image"
                  />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Docteurs;
