import { BuyerFields } from "./buyer";
import { CarFields } from "./car";
import { CertificateFields } from "./certificate";
import { OfterDetailsFields } from "./otherDetails";
import { PaymentFields } from "./payment";
import { SalesmanFields } from "./salesman";

export type ContractFields = SalesmanFields &
  CarFields &
  BuyerFields &
  CertificateFields &
  PaymentFields &
  OfterDetailsFields;
