import React, { createContext } from "react";
import { PdfService } from "./services/PdfService";
import { AppRoutes } from "./components/AppRoutes/AppRoutes";
import { Routes } from "./values/routes";
import "./App.scss";

export const PdfServiceContext = createContext<PdfService | null>(null);

function App() {
  const pdfService: PdfService = new PdfService();

  return (
    <PdfServiceContext.Provider value={pdfService}>
      <AppRoutes routes={Routes}></AppRoutes>
    </PdfServiceContext.Provider>
  );
}

export default App;
