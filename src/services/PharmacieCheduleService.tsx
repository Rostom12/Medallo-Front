import axios from 'axios';
import { PharmacieChedule } from '../models/PharmacieChedule';
   
    //TODO changer variable en focntion environement
        export const getAllPharmacieChedule = async () => {
          return await axios.get(``)
          .then((res) => {
            const pharmaciesChedule : Array<PharmacieChedule>= res.data ;
            return pharmaciesChedule;
          })
        }

        export const getPharmacieChedule= async (i :number)  =>{
          return await axios.get(``)
          .then((res) => {
            const pharmacieChedule : PharmacieChedule= res.data ;
            return pharmacieChedule;
          })
        }

        export const postPharmacieChedule = (pharmacieChedule : PharmacieChedule) =>{
        
            axios.post(``,null, {params : {
              day : pharmacieChedule.day ,
              openMorning: pharmacieChedule.openMorning ,
              shutMorning : pharmacieChedule.shutMorning ,
              openAfternoon : pharmacieChedule.openAfternoon ,
              shutAfternoon : pharmacieChedule.shutAfternoon ,
              paraPharamacieId : pharmacieChedule.PharamacieId,
              
                  }})
            .then((res) => {
              console.log(res.data);
            })
        }
     
    export const updatePharmacieChedule =  (i:Number, pharmacieChedule : PharmacieChedule) =>{
    
       axios.put(``,{ 
        day : pharmacieChedule.day ,
        openMorning: pharmacieChedule.openMorning ,
        shutMorning : pharmacieChedule.shutMorning ,
        openAfternoon : pharmacieChedule.openAfternoon ,
        shutAfternoon : pharmacieChedule.shutAfternoon ,
        paraPharamacieId : pharmacieChedule.PharamacieId,

      })
      .then((res) => {
        console.log(res.data);
      })
    }

   export const deletePharmacieChedule = (i : number) => {
      axios.delete(``)
      .then((res) => {
        console.log(res.data);
      })
    }



