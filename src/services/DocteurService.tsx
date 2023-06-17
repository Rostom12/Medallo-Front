import axios from "axios";
import { DocteurModel } from "../models/Docteur";

//TODO changer variable en focntion environement
export const getAllDocteur = (
  latitude: number,
  longitude: number,
  Type: string
) => {
  return axios
    .get(`http://localhost:3001/api/doctor/map`, {
      params: {
        lat: latitude,
        lon: longitude,
        type: Type,
      },
    })
    .then((res) => {
      const docteurs: Array<DocteurModel> = res.data;
      return docteurs;
    });
};

export const getAllOpenDocteurs = (
  typeDocteur: string,
  latitude: number,
  longitude: number
) => {
  return axios
    .get(`http://localhost:3001/api/doctor/open`, {
      params: {
        type: typeDocteur,
        lat: latitude,
        lon: longitude,
      },
    })
    .then((res) => {
      const docteurs: Array<DocteurModel> = res.data;
      return docteurs;
    });
};
export const getDocteur = (i: number, lati: number, long: number) => {
  return axios
    .get(`http://localhost:3001/api/doctor/doctorid`, {
      params: {
        Id: i,
        lat: lati,
        lon: long,
      },
    })
    .then((res) => {
      const docteur: DocteurModel = res.data;
      return docteur;
    });
};
/*
        export const postDocteur = (docteur: Docteur) =>{
        
            axios.post(``,null, {params : {
              name : docteur.name ,
              firstname: docteur.firstname ,
              mail : docteur.mail ,
              websiteUrl : docteur.websiteUrl ,
              phoneNumber : docteur.phoneNumber ,
              showing : docteur.showing,
              specialitie : docteur.specialitie,
              adresseType : docteur.adresseType ,
              CompanyType : docteur.CompanyType ,
                  }})
            .then((res) => {
              console.log(res.data);
            })
        }
     
    export const updateDocteur =  (i:Number, docteur: Docteur) =>{
    
       axios.put(``,{ 
              name : docteur.name ,
              firstname: docteur.firstname ,
              mail : docteur.mail ,
              websiteUrl : docteur.websiteUrl ,
             
              phoneNumber : docteur.phoneNumber ,
              showing : docteur.showing,
              specialitie : docteur.specialitie,
              adresseType : docteur.adresseType ,
              CompanyType : docteur.CompanyType ,
      })
      .then((res) => {
        console.log(res.data);
      })
    }
*/
export const deleteDocteur = (i: number) => {
  axios.delete(``).then((res) => {
    console.log(res.data);
  });
};
