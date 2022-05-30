import React, { FC, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { PageWrapper, FormBuilder } from "@components";
import { FormValues } from "@configs";
import { PdfTemplateContext, RoutePaths, PdfFields } from "@values";
import { GenericForm } from "@types";
import { PersonUtil } from "@utils/PersonUtil";
import "./Onboarding.scss";

export const Onboarding: FC<{}> = () => {
  const pdfTemplate = useContext(PdfTemplateContext);

  const formFields: GenericForm = {};

  const handleChanges = (fieldName: string, value: string | number) => {
    formFields[fieldName] = value;
  };

  useEffect(() => {
    return () => {
      formFields[PdfFields.BUYER_NAME_SHORT] = PersonUtil.getShortName(
        formFields[PdfFields.BUYER_NAME] as string
      );
      formFields[PdfFields.SALESMAN_NAME_SHORT] = PersonUtil.getShortName(
        formFields[PdfFields.SALESMAN_NAME] as string
      );
      pdfTemplate.setFieldsByObject(formFields);
    };
  }, []);

  return (
    <PageWrapper verticalAlign="start">
      <>
        {FormValues.map((form, index) => (
          <FormBuilder
            onChange={handleChanges}
            key={`${index}-${form.title}`}
            form={form}
          ></FormBuilder>
        ))}

        <Link className="form__button-link" to={RoutePaths.PREVIEW}>
          <Button color="primary" variant="contained">
            Просмотр
          </Button>
        </Link>
      </>
    </PageWrapper>
  );
};
