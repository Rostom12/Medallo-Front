import { CompanyTypesEnum } from "./enums/CompanyTypesEnum"
import { SpecialitiesEnum } from "./enums/SpecialitiesEnum"
import { AdressTypeEnum } from "./enums/PhoneNumberAndAdressTypeEnum"

export interface Analytics {
     // Analytics 
     profileViews : number
     clickOnMapButton : number
     searchApparition : number 
 }

 export interface Disponibilities {
    //Disponibilities [ NOT REGISTERED IN DB BUT GIVEN BY BACKEND ]
    isOpenNow: boolean
    nextReopening?: Date
    nextShutting?: Date
 }

 
export interface Contact {
    contactId: number
    phoneNumber : string
    addressType: AdressTypeEnum
    address : string
    city: string
    distance: string
    adressPhoto?: string
} 


 /*NEXT IMPROVEMENT
 export interface UserAnalytic {
    //Analytics by user per company
    profileViewByUser 
    clickOnMapButtonByUser 
    searchApparitionByUser 
 }
 */

export interface CompanyData {
    id: number
    name: string
    ownerName: string
    createdDate : Date
    webSiteUrl?: string
    mail?: string
    //DEPENDS on type of company
    contact : Contact | Array<Contact>
    companyPhoto?: string
    disponibilities: Disponibilities
    analyticData: Analytics
    //TODO service should initialize this 
    type: CompanyTypesEnum

}

export interface SearchData {
    id : number
    userLocalisation : string
    //SHOULD BE SORTED BY DISTANCE
    companiesResults : Array<CompanyData>
    timeOfSearch : Date
}

export interface Visitor {
    sessionId: string
    searches: Array<SearchData>
}

//TODO initialize with type=CompanyTypesEnum.PHARMACIE
export interface PharamacieData extends CompanyData {
    nextGardeBegining : Date
    nextGardeEnding : Date
    //[ NOT REGISTERED IN DB BUT GIVEN BY BACKEND ]
    isInGardePeriod : boolean 
}

//TODO initialize with type=CompanyTypesEnum.PARAPHARMACIE
export interface ParapharamacieData extends CompanyData {
   
}

//company photo is profile photo
export interface DocteursData extends CompanyData {
    specialities : Array<SpecialitiesEnum>
}
