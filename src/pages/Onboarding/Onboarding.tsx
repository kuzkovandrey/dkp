import React, { BaseSyntheticEvent, FC, useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { PageWrapper, FormBuilder } from "@components";
import { FormValues } from "@configs";
import { PdfTemplateContext, RoutePaths } from "@values";
import "./Onboarding.scss";

export const Onboarding: FC<{}> = () => {
  const pdfTemplate = useContext(PdfTemplateContext);
  pdfTemplate.setEditMode();

  return (
    <PageWrapper verticalAlign="start">
      <Box
        className="form"
        component="form"
        noValidate
        autoComplete="off"
        onChange={({ target }: BaseSyntheticEvent) => {
          pdfTemplate.setTextByField(target.id, target.value);
        }}
      >
        {FormValues.map((form, index) => (
          <FormBuilder key={`${index}-${form.title}`} form={form}></FormBuilder>
        ))}

        <Link className="form__button-link" to={RoutePaths.PREVIEW}>
          <Button color="primary" variant="contained">
            Просмотр
          </Button>
        </Link>
      </Box>
    </PageWrapper>
  );
};
