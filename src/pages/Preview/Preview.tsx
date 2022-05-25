import React, { FC, useContext, useEffect, useRef } from "react";
import { PdfTemplateContext } from "@values/pdfTemplateContext";
import "./Preview.scss";

export const Preview: FC = () => {
  const pdfTemplate = useContext(PdfTemplateContext);
  pdfTemplate.setPreviewMode();

  const iframeRef = useRef<HTMLIFrameElement>(null);

  const saveAndViewPdf = async () => {
    if (iframeRef && iframeRef.current)
      iframeRef.current.src = await pdfTemplate.savePdfAsBase64();
  };

  useEffect(() => {
    saveAndViewPdf();
  }, []);

  return <iframe ref={iframeRef} className="preview" title="preview"></iframe>;
};
