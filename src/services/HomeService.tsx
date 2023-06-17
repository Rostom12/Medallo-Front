import axios from 'axios';
import { Localisation } from '../models/Localisation';
   
    //TODO changer variable en focntion environement
        export const getAllLocalisation = async () => {
          return await axios.get(``)
          .then((res) => {
            const localisations : Array<Localisation>= res.data ;
            return localisations;
          })
        }

        export const getLocalisation= async (i :number)  =>{
          return await axios.get(``)
          .then((res) => {
            const localisation : Localisation= res.data ;
            return localisation ;
          })
        }

        export const postLocalisation = (localisation: Localisation) =>{
        
            axios.post(``,null, {params : {
                adresse : localisation.adresse ,
                latitude: localisation.latitude ,
                longitude : localisation.longitude ,
                date : localisation.date
                  
                  }})
            .then((res) => {
              console.log(res.data);
            })
        }
     
    export const updateLocalisation =  (i:Number, localisation: Localisation) =>{
    
       axios.put(``,{ 
                adresse : localisation.adresse ,
                latitude: localisation.latitude ,
                longitude : localisation.longitude ,
                date : localisation.date
          
      })
      .then((res) => {
        console.log(res.data);
      })
    }

   export const deleteLocalisation = (i : number) => {
      axios.delete(``)
      .then((res) => {
        console.log(res.data);
      })
    }



