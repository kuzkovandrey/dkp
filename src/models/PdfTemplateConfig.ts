import { TextAlignment } from "pdf-lib";

export interface PdfTemplateConfig {
  fontPath: string;
  fontSize: number;
  align: TextAlignment;
  pdfTemplatePath: string;
}
