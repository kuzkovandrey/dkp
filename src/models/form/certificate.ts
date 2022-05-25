import { FormFieldNames } from "../../values";

export interface CertificateFields {
  certificate_serial: string;
  certificate_number: number;
  certificate_issued_by: string;
  certificate_issued_date: string;
}

export interface Certificate {
  [FormFieldNames.SERIAL]: string;
  [FormFieldNames.NUMBER]: number;
  [FormFieldNames.ISSUES_BY]: string;
  [FormFieldNames.ISSUES_DATE]: string;
}

export class CertificateMapper {
  public static map(certificate: Certificate): CertificateFields {
    return {
      certificate_serial: certificate.serial,
      certificate_number: certificate.number,
      certificate_issued_by: certificate.issuedBy,
      certificate_issued_date: certificate.issuedDate,
    };
  }
}
