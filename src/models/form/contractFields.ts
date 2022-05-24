import { BuyerFields } from "./buyer";
import { CarFields } from "./car";
import { CertificateFields } from "./certificate";
import { OfterDetailsFields } from "./otherDetails";
import { PaymentFields } from "./payment";
import { SalemanFields } from "./salesman";

export type ContractFields = SalemanFields &
  CarFields &
  BuyerFields &
  CertificateFields &
  PaymentFields &
  OfterDetailsFields;
