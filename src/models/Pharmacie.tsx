import { SpecialitiesEnum } from "./enums/SpecialitiesEnum";
import { CompanyTypesEnum } from "./enums/CompanyTypesEnum";
import { AdressTypeEnum } from "./enums/PhoneNumberAndAdressTypeEnum";

export interface PharmacieModel {
  Id?: number;
  //  ownerName? : string ,
  // Name? : string,
  // websiteUrl? : string ,
  // phoneNumber? : string ,
  // mail? : string ,
  // showing? : string ,
  /* nextGardeBegining? : string ,
     nextGardeEnding? : string ,
     address? : string ,
     city? : string ,
    OwnerPhoneNumber? : string ,
    Distance? : string ,
    createDate? : Date ,*/
  NextOpening?: string;
  Name?: string;
  Address?: string;
  PhoneNumber?: string;
  Distance?: number;
  Status?: string;
}
