import React, { createContext, FC } from "react";
import { PdfTemplate } from "@utils/PdfTemplate";

const pdfTemplate: PdfTemplate = new PdfTemplate();

export const PdfTemplateContext = createContext<PdfTemplate>(pdfTemplate);

interface PdfContextProviderProps {
  children: JSX.Element;
}

export const PdfTemplateProvider: FC<PdfContextProviderProps> = ({
  children,
}) => (
  <PdfTemplateContext.Provider value={pdfTemplate}>
    {children}
  </PdfTemplateContext.Provider>
);
