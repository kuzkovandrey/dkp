export interface CertificateFields {
  certificate_serial: string;
  certificate_number: number;
  certificate_issued_by: string;
  certificate_issued_date: string;
}

export interface Certificate {
  serial: string;
  number: number;
  issuedBy: string;
  issuedDate: string;
}
