import React, { FC } from "react";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { FormBuilder } from "../../components/FormBuilder/FormBuilder";
import { BuyerFormValues } from "../../config/FormValuesConfig";

export const Onboarding: FC<any> = () => (
  <PageWrapper verticalAlign="start">
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      onChange={(event: any) => {
        console.log(event);
      }}
    >
      <FormBuilder form={BuyerFormValues}></FormBuilder>
    </Box>
  </PageWrapper>
);
