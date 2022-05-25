import { GenericForm } from "../../types";
import { PersonUtil } from "../../utils/PersonUtil";
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

export class BuyerMapper {
  public static map(buyer: Buyer): BuyerFields {
    return {
      buyer_name: buyer.fullName,
      buyer_name_short: PersonUtil.getShortName(buyer.fullName),
      buyer_address: buyer.address,
      buyer_passport: `${buyer.passportSerial} ${buyer.passportNumber}`,
      buyer_owner: buyer.owner ?? "",
      buyer_attorney: buyer.attorney ?? "",
    };
  }
}
