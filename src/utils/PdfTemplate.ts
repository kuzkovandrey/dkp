import { GenericForm } from "@types";
import fontkit from "@pdf-lib/fontkit";
import { PDFDocument, PDFFont, PDFForm, PDFTextField } from "pdf-lib";
import { PdfLoader } from "./PdfLoader";
import { FontLoader } from "./FontLoader";
import { PdfTemplateConfig } from "@models";
import { PdfTemplateDefaultConfig } from "@configs";

export class PdfTemplate {
  private readonly config: PdfTemplateConfig = PdfTemplateDefaultConfig;

  private pdfTemplate: PDFDocument;

  private pdfForm: PDFForm;

  private font: PDFFont;

  constructor(config?: PdfTemplateConfig) {
    this.config = { ...this.config, ...(config || {}) };

    this.loadAndPreparePDFTemplate(this.config);
  }

  private async loadAndPreparePDFTemplate(config: PdfTemplateConfig) {
    const [template, pdfForm, font] = await PdfLoader.loadTemplate(
      config.pdfTemplatePath
    ).then((tmpl) => this.configurePDFTemplate(tmpl, config));

    this.pdfTemplate = template;
    this.pdfForm = pdfForm;
    this.font = font;

    this.disableAllFields();
  }

  private async configurePDFTemplate(
    template: PDFDocument,
    { fontPath }: PdfTemplateConfig
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

  private enableAllFields() {
    this.pdfForm.getFields().forEach((field) => {
      field.disableReadOnly();
    });
  }

  private disableAllFields() {
    this.pdfForm.getFields().forEach((field) => {
      field.enableReadOnly();
    });
  }

  clearAllFields() {
    this.pdfForm.getFields().forEach((field) => {
      this.setTextByField(field.getName(), "");
    });
  }

  setTextByField(fieldName: string, value: string | number) {
    try {
      const field = this.getAndPrepareField(fieldName);
      field.setText(`${value}`);
      field.updateAppearances(this.font);
    } catch (e) {
      console.log(e);
    }
  }

  setFieldsByObject(formFields: GenericForm) {
    Object.entries(formFields).forEach(([fieid, value]) => {
      this.setTextByField(fieid, value);
    });
  }

  setEditMode() {
    this.clearAllFields();
    this.enableAllFields();
  }

  setPreviewMode() {
    this.disableAllFields();
  }

  async savePdfAsBase64(): Promise<string> {
    return this.pdfTemplate.saveAsBase64({ dataUri: true });
  }
}
