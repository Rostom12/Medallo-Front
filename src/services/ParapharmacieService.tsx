import axios from "axios";
import { ParapharmacieModel } from "../models/Parapharmacie";

//TODO changer variable en focntion environement
export const getAllParapharmacie = (latitude: number, longitude: number) => {
  return axios
    .get(`http://localhost:3001/api/parapharmacie/map`, {
      params: {
        lat: latitude,
        lon: longitude,
      },
    })
    .then((res) => {
      const parapharmacies: Array<ParapharmacieModel> = res.data;
      return parapharmacies;
    });
};
export const getAllOpenParapharmacie = (
  latitude: number,
  longitude: number
) => {
  return axios
    .get(`http://localhost:3001/api/parapharmacie/open`, {
      params: {
        lat: latitude,
        lon: longitude,
      },
    })
    .then((res) => {
      const parapharmacies: Array<ParapharmacieModel> = res.data;
      return parapharmacies;
    });
};

export const getParapharmacie = (
  i: number,
  latitude: number,
  longitude: number
) => {
  return axios
    .get(`http://localhost:3001/api/parapharmacie/parapharmacieid`, {
      params: {
        id: i,
        lat: latitude,
        lon: longitude,
      },
    })
    .then((res) => {
      const parapharmacie: ParapharmacieModel = res.data;
      return parapharmacie;
    });
};

/*       export const postParapharmacie = (parapharmacie: Parapharmacie) =>{
        
            axios.post(``,null, {params : {
                  
                    name : parapharmacie.Name ,
                    OwnerName: parapharmacie.ownerName ,
                    mail : parapharmacie.mail ,
                    websiteUrl : parapharmacie.websiteUrl ,
                    OwnerPhoneNumber : parapharmacie.OwnerPhoneNumber ,
                    showing : parapharmacie.showing,
                    adress :   parapharmacie.address ,
                    city :   parapharmacie.city ,
                    createDate : parapharmacie.createDate 
                 
                  }})
            .then((res) => {
              console.log(res.data);
            })
        }
    
    export const updateParapharmacie =  (i:Number, parapharmacie: Parapharmacie) =>{
    
       axios.put(``,{ 
                name : parapharmacie.name ,
                OwnerName : parapharmacie.ownerName ,
                mail : parapharmacie.mail ,
                websiteUrl : parapharmacie.websiteUrl ,
                OwnerPhoneNumber : parapharmacie.OwnerPhoneNumber ,
                showing : parapharmacie.showing,
                adress :   parapharmacie.address ,
                city :   parapharmacie.city ,
                createDate : parapharmacie.createDate 
      })
      .then((res) => {
        console.log(res.data);
      })
    }
 */
export const deleteParapharmacie = (i: number) => {
  axios.delete(``).then((res) => {
    console.log(res.data);
  });
};
