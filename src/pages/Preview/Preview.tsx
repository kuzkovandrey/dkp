import react, { FC, useContext, useEffect, useRef } from "react";
import "./Preview.scss";
import { PdfTemplateContext } from "../../App";

export const Preview: FC = () => {
  const pdfTemplate = useContext(PdfTemplateContext);

  const iframeRef = useRef<HTMLIFrameElement>(null);

  const saveAndViewPdf = async () => {
    pdfTemplate.disableAllFields();

    if (iframeRef && iframeRef.current)
      iframeRef.current.src = await pdfTemplate.savePdfAsBase64();
  };

  useEffect(() => {
    saveAndViewPdf();
  }, []);

  return <iframe ref={iframeRef} className="preview" title="1"></iframe>;
};
