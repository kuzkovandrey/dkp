import { GenericForm } from "./../../types/GenericForm";
import { FormFieldNames } from "../../values";

export interface Person extends Partial<GenericForm> {
  [FormFieldNames.FULL_NAME]: string;
  [FormFieldNames.ADDRESS]: string;
  [FormFieldNames.PASSPORT_NUMBER]: number;
  [FormFieldNames.PASSPORT_SERIAL]: string;
  [FormFieldNames.ATTORNEY]?: string;
  [FormFieldNames.OWNER]?: string;
}
