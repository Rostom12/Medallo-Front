import { SpecialitiesEnum } from "./enums/SpecialitiesEnum";


export interface DocteurChedule {
    id? : number,
    day? : string ,
    openMorning? : string,
    shutMorning? : string ,
    openAfternoon? : string ,
    shutAfternoon? : string ,
    docteurId? : number ,
}