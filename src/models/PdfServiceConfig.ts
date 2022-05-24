import { TextAlignment } from "pdf-lib";

export interface PdfServiceConfig {
  fontPath: string;
  fontSize: number;
  align: TextAlignment;
  pdfTemplatePath: string;
}
