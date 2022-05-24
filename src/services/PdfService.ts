import fontkit from "@pdf-lib/fontkit";
import { PDFDocument, PDFFont, PDFForm, PDFTextField } from "pdf-lib";
import { PdfLoader } from "./PdfLoader";
import { FontLoader } from "./FontLoader";
import { PdfServiceConfig } from "../models/PdfServiceConfig";
import { PdfServiceDefaultConfig } from "../config/PdfServiceDefaultConfig";

export class PdfService {
  private readonly config: PdfServiceConfig;

  private pdfTemplate: PDFDocument;

  private pdfForm: PDFForm;

  private font: PDFFont;

  constructor(config: PdfServiceConfig = PdfServiceDefaultConfig) {
    this.config = { ...this.config, ...config };

    this.loadAndPreparePDFTemplate(this.config);
  }

  private async loadAndPreparePDFTemplate(config: PdfServiceConfig) {
    const [template, pdfForm, font] = await PdfLoader.loadTemplate(
      config.pdfTemplatePath
    ).then((tmpl) => this.configurePDFTemplate(tmpl, config));

    this.pdfTemplate = template;
    this.pdfForm = pdfForm;
    this.font = font;
  }

  private async configurePDFTemplate(
    template: PDFDocument,
    { fontPath }: PdfServiceConfig
  ): Promise<[PDFDocument, PDFForm, PDFFont]> {
    const pdfForm: PDFForm = template.getForm();
    template.registerFontkit(fontkit);
    const fontBytes = await FontLoader.loadArrayBuffer(fontPath);
    const font: PDFFont = await template.embedFont(fontBytes);

    return [template, pdfForm, font];
  }

  private getAndPrepareField(fieldName: string): PDFTextField {
    const field = this.pdfForm.getTextField(fieldName);

    field.setAlignment(this.config.align);
    field.setFontSize(this.config.fontSize);

    return field;
  }

  setTextByField(fieldName: string, text: string) {
    const field = this.getAndPrepareField(fieldName);

    field.setText(text);
    field.updateAppearances(this.font);
    field.enableReadOnly();
  }

  disableAllFields() {
    this.pdfForm.getFields().forEach((fields) => {
      fields.enableReadOnly();
    });
  }

  async savePdfAsBase64(): Promise<string> {
    return this.pdfTemplate.saveAsBase64({ dataUri: true });
  }
}
