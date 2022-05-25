import React, { FC } from "react";
import { Typography, TextField } from "@mui/material";
import { Form } from "@types";
import "./FormBuilder.scss";

export interface FormBuilderProps {
  form: Form;
}

export const FormBuilder: FC<FormBuilderProps> = ({ form }) => {
  return (
    <>
      <Typography variant="h6" component="h4" align="center">
        {form.title}
      </Typography>

      {form.fields.map((field, index) => (
        <TextField
          style={{ margin: "0.5rem 0" }}
          className="field"
          size="small"
          key={`${field.name}-${index}`}
          id={field.name}
          label={field.placeholder}
          variant="outlined"
          required={field.isRequired}
        />
      ))}
    </>
  );
};
