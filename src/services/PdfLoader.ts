import { PDFDocument } from "pdf-lib";

export class PdfLoader {
  static async loadTemplate(path: string): Promise<PDFDocument> {
    return fetch(path)
      .then((res) => res.arrayBuffer())
      .then((arrayBuffer) => PDFDocument.load(arrayBuffer));
  }
}
