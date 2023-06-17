import { SpecialitiesEnum } from "./enums/SpecialitiesEnum";


export interface PharmacieChedule {
    id? : number,
    day? : string ,
    openMorning? : string,
    shutMorning? : string ,
    openAfternoon? : string ,
    shutAfternoon? : string ,
    PharamacieId? : number ,
    
}