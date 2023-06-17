import axios from 'axios';
import { Docteurspecialities } from '../models/doctorspecialities';
   
    //TODO changer variable en focntion environement
        export const getAllDocteurspecialitie = async () => {
          return await axios.get(``)
          .then((res) => {
            const docteurspecialities : Array<Docteurspecialities>= res.data ;
            return docteurspecialities ;
          })
        }

        export const getDocteurspecialitie = async (i :number)  =>{
          return await axios.get(``)
          .then((res) => {
            const docteurspecialitie  : Docteurspecialities= res.data ;
            return docteurspecialitie ;
          })
        }

        export const postDocteurspecialitie  = (docteurspecialitie : Docteurspecialities) =>{
        
            axios.post(``,null, {params : {
                specialityTitle : docteurspecialitie.specialityTitle ,
                docteurId: docteurspecialitie.docteurId ,
               
            
             
                  }})
            .then((res) => {
              console.log(res.data);
            })
        }
     
    export const updateDocteurspecialitie  =  (i:Number, docteurspecialitie : Docteurspecialities) =>{
    
       axios.put(``,{ 
        specialityTitle : docteurspecialitie.specialityTitle ,
        docteurId: docteurspecialitie.docteurId ,

      })
      .then((res) => {
        console.log(res.data);
      })
    }

   export const deleteDocteurspecialitie  =  (i : number) => {
      axios.delete(``)
      .then((res) => {
        console.log(res.data);
      })
    }



