import axios from "axios";
import { PharmacieModel } from "../models/Pharmacie";

//TODO changer variable en focntion environement

export const getAllPharmacie = (latitude: number, longitude: number) => {
  return axios
    .get(`http://localhost:3001/api/map`, {
      params: {
        lat: latitude,
        lon: longitude,
      },
    })
    .then((res) => {
      const pharmacies: Array<PharmacieModel> = res.data;
      return pharmacies;
    });
};

export const getAllOpenPharmacie = (latitude: number, longitude: number) => {
  return axios
    .get(`http://localhost:3001/api/pharmacie/open`, {
      params: {
        lat: latitude,
        lon: longitude,
      },
    })
    .then((res) => {
      const pharmacies: Array<PharmacieModel> = res.data;
      return pharmacies;
    });
};

export const getPharmacie = (
  i: number,
  latitude: number,
  longitude: number
) => {
  return axios
    .get(`http://localhost:3001/api/pharmacy/pharmacieid`, {
      params: {
        id: i,
        lat: latitude,
        lon: longitude,
      },
    })
    .then((res) => {
      const pharmacie: PharmacieModel = res.data;
      return pharmacie;
    });
};

export const setPharmaciesDispo = async (i: number, date: Date) => {
  return await axios.get(``).then((res) => {
    const pharmacie: PharmacieModel = res.data;
    return true;
  });
};

export const setDistance = async (lang: number, atit: number) => {
  axios
    .post(`http://localhost:3001/api/setDistance`, {
      params: {
        atitude: atit,
        langitude: lang,
      },
    })
    .then((res) => {
      console.log(res.data);
    });
};

export const isOpenPharma = async (i: number, date: Date) => {
  return await axios.get(``).then((res) => {
    const pharmacie: PharmacieModel = res.data;
    return pharmacie;
  });
};

/*
        export const postPharmacie = (pharmacie: Pharmacie) =>{

            axios.post(``,null, {params : {
                    name : pharmacie.name ,
                    OwnerName : pharmacie.ownerName ,
                    mail : pharmacie.mail ,
                    websiteUrl : pharmacie.websiteUrl ,
                    phoneNumber : pharmacie.phoneNumber ,
                    showing : pharmacie.showing,
                    address : pharmacie.address ,
                    city : pharmacie.city ,
                    Distance : pharmacie.Distance ,
                    nextGardeBegining : pharmacie.nextGardeBegining,
                    nextGardeEnding : pharmacie.nextGardeEnding
                  }})
            .then((res) => {
              console.log(res.data);
            })
        }
     
        export const updatePharmacie =  (i:Number, pharmacie: Pharmacie) =>{
         axios.put(`/api/pharmacy/update`,{ 
                name : pharmacie.name ,
                OwnerName: pharmacie.ownerName ,
                mail : pharmacie.mail ,
                websiteUrl : pharmacie.websiteUrl ,
                phoneNumber : pharmacie.phoneNumber ,
                showing : pharmacie.showing,
                adress :   pharmacie.address ,
                city :   pharmacie.city ,
                Distance : pharmacie.Distance ,
                nextGardeBegining : pharmacie.nextGardeBegining,
                nextGardeEnding : pharmacie.nextGardeEnding
      })
      .then((res) => {
        console.log(res.data);
      })
    }
*/
export const deletepharmacie = (i: number) => {
  axios.delete(``).then((res) => {
    console.log(res.data);
  });
};
