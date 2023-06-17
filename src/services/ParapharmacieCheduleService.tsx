import axios from 'axios';
import { paraPharmacieChedule } from '../models/paraPharmacieChedule';
   
    //TODO changer variable en focntion environement
        export const getAllParaPharmacieChedule = async () => {
          return await axios.get(``)
          .then((res) => {
            const parapharmaciesChedule : Array<paraPharmacieChedule>= res.data ;
            return parapharmaciesChedule;
          })
        }

        export const getParapharmacieChedule= async (i :number)  =>{
          return await axios.get(``)
          .then((res) => {
            const parapharmacieChedule : paraPharmacieChedule= res.data ;
            return parapharmacieChedule;
          })
        }

        export const postParapharmacieChedule = (parapharmacieChedule : paraPharmacieChedule) =>{
        
            axios.post(``,null, {params : {
              day : parapharmacieChedule.day ,
              openMorning: parapharmacieChedule.openMorning ,
              shutMorning : parapharmacieChedule.shutMorning ,
              openAfternoon : parapharmacieChedule.openAfternoon ,
              shutAfternoon : parapharmacieChedule.shutAfternoon ,
              paraPharamacieId : parapharmacieChedule.paraPharamacieId,
              
                  }})
            .then((res) => {
              console.log(res.data);
            })
        }
     
    export const updateParapharmacieChedule =  (i:Number, parapharmacieChedule : paraPharmacieChedule) =>{
    
       axios.put(``,{ 
        day : parapharmacieChedule.day ,
        openMorning: parapharmacieChedule.openMorning ,
        shutMorning : parapharmacieChedule.shutMorning ,
        openAfternoon : parapharmacieChedule.openAfternoon ,
        shutAfternoon : parapharmacieChedule.shutAfternoon ,
        paraPharamacieId : parapharmacieChedule.paraPharamacieId,

      })
      .then((res) => {
        console.log(res.data);
      })
    }

   export const deleteParapharmacieChedule = (i : number) => {
      axios.delete(``)
      .then((res) => {
        console.log(res.data);
      })
    }



