import { Person } from "./person";

export interface SalemanFields {
  salesman_name: string;
  salesman_address: string;
  salesman_passport: string;
  salesman_attorney?: string;
  salesman_owner?: string;
  salesman_name_short: string;
}

export interface Saleman extends Person {}
