import axios from 'axios';
import { DocteurChedule } from '../models/DocteurChedule';
   
    //TODO changer variable en focntion environement
        export const getAllDocteurChedule = async () => {
          return await axios.get(``)
          .then((res) => {
            const docteursChedule : Array<DocteurChedule>= res.data ;
            return docteursChedule;
          })
        }

        export const getDocteurChedule= async (i :number)  =>{
          return await axios.get(``)
          .then((res) => {
            const docteursChedule : DocteurChedule= res.data ;
            return docteursChedule;
          })
        }

        export const postDocteurChedule = (docteursChedule : DocteurChedule) =>{
        
            axios.post(``,null, {params : {
              day : docteursChedule.day ,
              openMorning: docteursChedule.openMorning ,
              shutMorning : docteursChedule.shutMorning ,
              openAfternoon : docteursChedule.openAfternoon ,
              shutAfternoon : docteursChedule.shutAfternoon ,
              docteurId : docteursChedule.docteurId,
             
                  }})
            .then((res) => {
              console.log(res.data);
            })
        }
     
    export const updateDocteurChedule =  (i:Number, docteursChedule: DocteurChedule) =>{
    
       axios.put(``,{ 
            day : docteursChedule.day ,
            openMorning: docteursChedule.openMorning ,
            shutMorning : docteursChedule.shutMorning ,
            openAfternoon : docteursChedule.openAfternoon ,
            shutAfternoon : docteursChedule.shutAfternoon ,
            docteurId : docteursChedule.docteurId,
      })
      .then((res) => {
        console.log(res.data);
      })
    }

   export const deleteDocteurChedule = (i : number) => {
      axios.delete(``)
      .then((res) => {
        console.log(res.data);
      })
    }



