import { SpecialitiesEnum } from "./enums/SpecialitiesEnum";
import { CompanyTypesEnum } from "./enums/CompanyTypesEnum";
import { AdressTypeEnum } from "./enums/PhoneNumberAndAdressTypeEnum";

export interface DocteurModel {
  Id?: number;
  name?: string;
  firstname?: string;
  websiteUrl?: string;
  phoneNumber?: string;
  mail?: string;
  showing?: string;
  specialitie?: SpecialitiesEnum;
  adresseType?: AdressTypeEnum;
  CompanyType?: CompanyTypesEnum;
  NextOpening?: string;
  Name?: string;
  Address?: string;
  PhoneNumber?: string;
  Distance?: number;
  Status?: string;
}
