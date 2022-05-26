import React from "react";
import { AppRoutes } from "./components/AppRoutes/AppRoutes";
import { Routes, PdfTemplateContext, pdfTemplate } from "./values";
import "./App.scss";

function App() {
  return (
    <PdfTemplateContext.Provider value={pdfTemplate}>
      <AppRoutes routes={Routes}></AppRoutes>
    </PdfTemplateContext.Provider>
  );
}

export default App;
