import { createContext } from "react";
import { PdfTemplate } from "@utils/PdfTemplate";

export const pdfTemplate: PdfTemplate = new PdfTemplate();

export const PdfTemplateContext = createContext<PdfTemplate>(pdfTemplate);
