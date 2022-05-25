import { PersonUtil } from "../../utils/PersonUtil";
import { Person } from "./person";

export interface SalesmanFields {
  salesman_name: string;
  salesman_address: string;
  salesman_passport: string;
  salesman_attorney?: string;
  salesman_owner?: string;
  salesman_name_short: string;
}

export interface Salesman extends Person {}

export class SalesmanMapper {
  public static map(salesman: Salesman): SalesmanFields {
    return {
      salesman_name: salesman.fullName,
      salesman_name_short: PersonUtil.getShortName(salesman.fullName),
      salesman_address: salesman.address,
      salesman_passport: PersonUtil.getPassportData(
        salesman.passportSerial,
        salesman.passportNumber
      ),
      salesman_owner: salesman.owner ?? "",
      salesman_attorney: salesman.attorney ?? "",
    };
  }
}
