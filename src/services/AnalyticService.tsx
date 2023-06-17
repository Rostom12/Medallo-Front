import axios from 'axios';
import { Analytics } from '../models/Analytics';
   
    //TODO changer variable en focntion environement
        export const getAllAnalytics = async () => {
          return await axios.get(``)
          .then((res) => {
            const analytics : Array<Analytics>= res.data ;
            return analytics;
          })
        }

        export const getAnalytics= async (i :number)  =>{
          return await axios.get(``)
          .then((res) => {
            const analytics : Analytics= res.data ;
            return analytics ;
          })
        }

        export const postAnalytics = (analytics: Analytics) =>{
        
            axios.post(``,null, {params : {
                ProfleViews : analytics.searchAparition ,
                ClickOnMapbutton: analytics.searchAparition ,
                searchAparition : analytics.searchAparition ,
                  
                  
                  }})
            .then((res) => {
              console.log(res.data);
            })
        }
     
    export const updateAnalytics =  (i:Number, analytics: Analytics) =>{
    
       axios.put(``,{ 
        ProfleViews : analytics.searchAparition ,
        ClickOnMapbutton: analytics.searchAparition ,
        searchAparition : analytics.searchAparition ,
          
      })
      .then((res) => {
        console.log(res.data);
      })
    }

   export const deleteAnalytics = (i : number) => {
      axios.delete(``)
      .then((res) => {
        console.log(res.data);
      })
    }



