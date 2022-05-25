import React, { createContext } from "react";
import { PdfTemplate } from "./utils/PdfTemplate";
import { AppRoutes } from "./components/AppRoutes/AppRoutes";
import { Routes } from "./values/routes";
import "./App.scss";

const pdfTemplate: PdfTemplate = new PdfTemplate();

export const PdfTemplateContext = createContext<PdfTemplate>(pdfTemplate);

function App() {
  return (
    <PdfTemplateContext.Provider value={pdfTemplate}>
      <AppRoutes routes={Routes}></AppRoutes>
    </PdfTemplateContext.Provider>
  );
}

export default App;
