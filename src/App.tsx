import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Pharmacies from "./pages/Pharmacies";
import Parapharmacies from "./pages/Parapharmacies";
import Pharmacie from "./pages/Pharmacie";
import Parapharmacie from "./pages/Parapharmacie";
import Specialites from "./pages/Specialites";
import Docteurs from "./pages/Docteurs";
import Docteur from "./pages/Docteur";
import Contact from "./pages/Contact";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";

import "./App.css";
import { SpecialitiesEnum } from "./models/enums/SpecialitiesEnum";

/*imports for services*/

import { getAllDocteur } from "./services/DocteurService";
import { DocteurModel } from "./models/Docteur";

let docteurData: Array<DocteurModel>;

const pharmacieData = [
  {
    Id: 1,
    Name: "Alpha",
    Distance: 7,
    Address: "14 Av. Moulay Abdelziz",
    PhoneNumber: "0539325011",
    Status: "ouverte, ferme à 21h",
  },
  {
    Id: 2,
    Name: "Beta",
    Distance: 8,
    Address: "14 Av. Moulay Abdelziz",
    PhoneNumber: "0539325011",
    Status: "ouverte, ferme à 21h",
  },
  {
    Id: 3,
    Name: "C",
    Distance: 9,
    Address: "14 Av. Moulay Abdelziz",
    PhoneNumber: "0539325011",
    Status: "ouverte, ferme à 21h",
  },
  {
    Id: 4,
    Name: "D",
    Distance: 10,
    Address: "14 Av. Moulay Abdelziz",
    PhoneNumber: "0539325011",
    Status: "fermé",
  },
  {
    Id: 5,
    Name: "E",
    Distance: 11,
    Address: "14 Av. Moulay Abdelziz",
    PhoneNumber: "0539325011",
    Status: "ouverte, ferme à 21h",
  },
  {
    Id: 6,
    Name: "F",
    Distance: 12,
    Address: "14 Av. Moulay Abdelziz",
    PhoneNumber: "0539325011",
    Status: "ouverte, ferme à 21h",
  },
];
const parapharmacieData = [
  {
    Id: 1,
    Name: "Alpha",
    Distance: 7,
    Address: "14 Av. Moulay Abdelziz",
    PhoneNumber: "0539325011",
    Status: "ouverte, ferme à 21h",
  },
  {
    Id: 2,
    Name: "Beta",
    Distance: 8,
    Address: "14 Av. Moulay Abdelziz",
    PhoneNumber: "0539325011",
    Status: "ouverte, ferme à 21h",
  },
  {
    Id: 3,
    Name: "C",
    Distance: 9,
    Address: "14 Av. Moulay Abdelziz",
    PhoneNumber: "0539325011",
    Status: "ouverte, ferme à 21h",
  },
  {
    Id: 4,
    Name: "D",
    Distance: 10,
    Address: "14 Av. Moulay Abdelziz",
    PhoneNumber: "0539325011",
    Status: "fermé",
  },
  {
    Id: 5,
    Name: "E",
    Distance: 11,
    Address: "14 Av. Moulay Abdelziz",
    PhoneNumber: "0539325011",
    Status: "ouverte, ferme à 21h",
  },
  {
    Id: 6,
    Name: "F",
    Distance: 12,
    Address: "14 Av. Moulay Abdelziz",
    PhoneNumber: "0539325011",
    Status: "ouverte, ferme à 21h",
  },
];

const docSpec = [
  "Allergologie",
  "Anatomie",
  "Anesthésie",
  "Biologie",
  "Chirurgie",
  "Dermatologie",
  "Endocrinologie",
  "Addcitologie",
  "Rhumatologie",
  "Radiologie",
];

/*let docteurData = [
  {
    id: 1,
    name: "Boukhaled",
    spec: "Rhumatologie",
    position: "à 1 km de vous",
    specialite: "Chirurgien Rhumatologue",
    cabinetAddress: "14 Av. Moulay Abdelaziz",
    cliniqueAddress: "14 Av. Moulay Abdelaziz",
    phone: "0539325011",
  },
  {
    id: 2,
    name: "Boukhaled2",
    position: "à 2 km de vous",
    spec: "Rhumatologie",
    specialite: "Chirurgien Rhumatologue",
    cabinetAddress: "14 Av. Moulay Abdelaziz",
    cliniqueAddress: "14 Av. Moulay Abdelaziz",
    phone: "0539325011",
  },
  {
    id: 3,
    name: "Boukhaled3",
    spec: "Rhumatologie",
    position: "à 3 km de vous",
    specialite: "Chirurgien Rhumatologue",
    cabinetAddress: "14 Av. Moulay Abdelaziz",
    cliniqueAddress: "14 Av. Moulay Abdelaziz",
    phone: "0539325011",
  },
  {
    id: 4,
    name: "Boukhaled4",
    spec: "Rhumatologie",
    position: "à 4 km de vous",
    specialite: "Chirurgien Rhumatologue",
    cabinetAddress: "14 Av. Moulay Abdelaziz",
    cliniqueAddress: "14 Av. Moulay Abdelaziz",
    phone: "0539325011",
  },
  {
    id: 5,
    name: "Boukhaled5",
    spec: "Rhumatologie",
    position: "à 5 km de vous",
    specialite: "Chirurgien Rhumatologue",
    cabinetAddress: "14 Av. Moulay Abdelaziz",
    cliniqueAddress: "14 Av. Moulay Abdelaziz",
    phone: "0539325011",
  },
];*/

const docteurSpecialities = {
  id: 1,
  specialityTitle: "Allergologie",
  docteurId: 1,
};

function App() {
  const [lati, setlati] = useState(0);
  const [long, setlong] = useState(0);
  useEffect(() => {
    getAllDocteur(lati, long, "ophta")
      .then((res) => {
        docteurData = res;
      })
      .catch((error) => {
        console.log("Oops something went wrong: ", error);
      });
  });

  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/pharmacies":
      component = <Pharmacies pharmacieData={pharmacieData} />;
      break;
    case "/parapharmacies":
      component = <Parapharmacies parapharmacieData={parapharmacieData} />;
      break;
    case "/specialites":
      component = <Specialites docSpec={SpecialitiesEnum} />;
      break;

    case "/contact":
      component = <Contact />;
      break;
  }

  for (let i = 0; i < pharmacieData.length; i++) {
    switch (window.location.pathname) {
      case "/pharmacies/" + pharmacieData[i].Name:
        component = <Pharmacie pharmacieData={pharmacieData[i]} />;
        break;
    }
  }
  for (let i = 0; i < parapharmacieData.length; i++) {
    switch (window.location.pathname) {
      case "/parapharmacies/" + parapharmacieData[i].Name:
        component = <Parapharmacie parapharmacieData={parapharmacieData[i]} />;
        break;
    }
  }

  for (let i = 0; i < Object.keys(SpecialitiesEnum).length; i++) {
    switch (window.location.pathname) {
      case "/docteurs/" + Object.keys(SpecialitiesEnum)[i]:
        component = (
          <Docteurs
            docteurData={docteurData}
            Docteurspecialities={Object.keys(SpecialitiesEnum)[i]}
          />
        );
        break;
    }
  }

  /*for (let i = 0; i < docteurData.length; i++) {
    switch (window.location.pathname) {
      case "/docteurs/" + docteurData[i].Id:
        component = <Docteur docteurData={docteurData[i]} />;
        break;
    }
  }*/

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        {component}
      </header>
      <Footer />
    </div>
  );
}

export default App;
