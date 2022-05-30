import React from "react";
import { AppRoutes } from "./components/AppRoutes/AppRoutes";
import { Routes, PdfTemplateProvider } from "./values";
import "./App.scss";

function App() {
  return (
    <PdfTemplateProvider>
      <AppRoutes routes={Routes}></AppRoutes>
    </PdfTemplateProvider>
  );
}

export default App;
