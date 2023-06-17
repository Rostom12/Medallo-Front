import axios from 'axios';
import { DocteurContact } from '../models/DocteurContact';
   
    //TODO changer variable en focntion environement
        export const getAllDocteurContact = async () => {
          return await axios.get(``)
          .then((res) => {
            const docteursContact : Array<DocteurContact>= res.data ;
            return docteursContact ;
          })
        }

        export const getDocteurContact= async (i :number)  =>{
          return await axios.get(``)
          .then((res) => {
            const docteurContact : DocteurContact= res.data ;
            return docteurContact;
          })
        }

        export const postDocteurContact = (docteurContact : DocteurContact) =>{
        
            axios.post(``,null, {params : {
                adress : docteurContact.adress ,
                type: docteurContact.type ,
                city : docteurContact.city ,
                municipalty : docteurContact.municipalty ,
                docteurId : docteurContact.docteurId ,
            
             
                  }})
            .then((res) => {
              console.log(res.data);
            })
        }
     
    export const updateDocteurContact =  (i:Number, docteurContact : DocteurContact) =>{
    
       axios.put(``,{ 
                adress : docteurContact.adress ,
                type: docteurContact.type ,
                city : docteurContact.city ,
                municipalty : docteurContact.municipalty ,
                 docteurId : docteurContact.docteurId ,
      })
      .then((res) => {
        console.log(res.data);
      })
    }

   export const deleteDocteurContact = (i : number) => {
      axios.delete(``)
      .then((res) => {
        console.log(res.data);
      })
    }



