import { Person } from "./person";

export interface BuyerFields {
  buyer_name: string;
  buyer_address: string;
  buyer_passport: string;
  buyer_owner: string;
  buyer_attorney: string;
  buyer_name_short: string;
}

export interface Buyer extends Person {}
