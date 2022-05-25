import React, { BaseSyntheticEvent, FC, useContext, useId } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";
import { FormBuilder } from "../../components/FormBuilder/FormBuilder";
import { FormValues } from "../../config/FormValuesConfig";
import { PdfTemplateContext } from "../../App";
import "./Onboarding.scss";
import { RoutePaths } from "../../values/routePaths";

export const Onboarding: FC = () => {
  const pdfTemplate = useContext(PdfTemplateContext);
  pdfTemplate.clearAllFields();
  const id = useId();

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
          <FormBuilder key={id} form={form}></FormBuilder>
        ))}

        <Link to={RoutePaths.PREVIEW} style={{ textDecoration: "none" }}>
          <Button color="primary" variant="contained">
            Просмотр
          </Button>
        </Link>
      </Box>
    </PageWrapper>
  );
};
