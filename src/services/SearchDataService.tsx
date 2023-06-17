import axios from 'axios';
import { SearchData } from '../models/SearchData';
   
    //TODO changer variable en focntion environement
        export const getAllSearchData = async () => {
          return await axios.get(``)
          .then((res) => {
            const searchData : Array<SearchData>= res.data ;
            return searchData;
          })
        }

        export const getSearchData= async (i :number)  =>{
          return await axios.get(``)
          .then((res) => {
            const searchData : SearchData= res.data ;
            return searchData ;
          })
        }

        export const postSearchData = (searchData: SearchData) =>{
        
            axios.post(``,null, {params : {
                localisation : searchData.localisation ,
                timeOfSearch: searchData.timeOfSearch ,
                visitorId : searchData.visitorId ,
                  
                  
                  }})
            .then((res) => {
              console.log(res.data);
            })
        }
     
    export const updatePharmacie =  (i:Number, searchData: SearchData) =>{
    
       axios.put(``,{ 
        localisation : searchData.localisation ,
        timeOfSearch: searchData.timeOfSearch ,
        visitorId : searchData.visitorId ,
          
      })
      .then((res) => {
        console.log(res.data);
      })
    }

   export const deletepharmacie = (i : number) => {
      axios.delete(``)
      .then((res) => {
        console.log(res.data);
      })
    }



