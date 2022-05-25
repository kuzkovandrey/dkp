import { TextAlignment } from "pdf-lib";
import { FONT_PATH, PDF_TEMPLATE_PATH } from "@values/consts";
import { PdfTemplateConfig } from "@models";

export const PdfTemplateDefaultConfig: PdfTemplateConfig = {
  fontSize: 12,
  align: TextAlignment.Center,
  fontPath: FONT_PATH,
  pdfTemplatePath: PDF_TEMPLATE_PATH,
};
