import React, { Component } from "react";
import "./Specialites.css";
import { SpecialitiesEnum } from "../models/enums/SpecialitiesEnum";

/*type Props = {
  docSpec: Array<string>;
};*/

type Props = {
  docSpec: Object;
};

export class Specialites extends React.Component<Props> {
  state = {
    filterdSearch: Object.keys(this.props.docSpec),
  };
  searchFun = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      filterdSearch: Object.keys(this.props.docSpec).filter((element) =>
        element.toLowerCase().includes(e.target.value.toLowerCase())
      ),
    });
  };

  render() {
    return (
      <div className="container mt-5">
        <h1 className=" text-center">Sélectionez une spécialité</h1>
        <form className="d-flex searchBar" role="search">
          <input
            className="form-control me-2 searchInput"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => this.searchFun(e)}
          />
        </form>
        <div className="row mb-4">
          {this.state.filterdSearch.map((element) => {
            return (
              <div key={element} className="col-md-6 col-lg-4 mb-3">
                <div className="card">
                  <div className="card-body d-flex flex-direction-colomn  justify-content-between">
                    <h6 className="card-title">{element}</h6>
                    <a
                      href={"/docteurs/" + element}
                      className="btn btn-primary access-btn"
                    >
                      Accéder
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Specialites;
