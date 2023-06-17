import { SpecialitiesEnum } from "./enums/SpecialitiesEnum";
import { CompanyTypesEnum } from "./enums/CompanyTypesEnum";
import { AdressTypeEnum } from "./enums/PhoneNumberAndAdressTypeEnum";

export interface ParapharmacieModel {
  /*   idParaPharmacieData? : number,
    ownerName? : string ,
    name? : string,
    websiteUrl? : string ,
    mail? : string ,
    showing? : string ,
    address? : string ,
    city? : string ,
    OwnerPhoneNumber? : string ,
    createDate? : Date ,
    */
  Id?: number;
  NextOpening?: string;
  Name?: string;
  Address?: string;
  PhoneNumber?: string;
  Lat?: number;
  Lon?: number;
  Distance?: number;
  Status?: string;
}
